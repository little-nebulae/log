import type { StackOverflowedError } from "@little-nebulae/error";
import type {
  EncodableValue,
  InvalidJsonValueError,
  PrototypePollutionError,
} from "@little-nebulae/json";
import type { AsyncResult } from "@little-nebulae/result";

import { composeErrorMessage, UnexpectedError } from "@little-nebulae/error";
import { attemptSerialize } from "@little-nebulae/json";
import {
  generateEntryNameFromTime,
  writeTextFile,
} from "@little-nebulae/node-fs";
import { fail } from "@little-nebulae/result";
import { join } from "node:path";
import { validate } from "typia";

import type { Log } from "@/types";

export async function writeLogFile({
  log,
  date,
  parentDir,
}: {
  log: Log;
  date: Date;
  parentDir: string;
}): AsyncResult<
  undefined,
  | InvalidJsonValueError
  | PrototypePollutionError
  | StackOverflowedError
  | UnexpectedError
> {
  const validateResult = validate<EncodableValue>(log);
  if (!validateResult.success) {
    return fail(
      new UnexpectedError({
        message: composeErrorMessage({
          operation: "write log file",
          reason: "log is not encodable",
        }),
        cause: validateResult.errors,
        meta: null,
      }),
    );
  }
  const encodableLog = validateResult.data;

  const serializeResult = attemptSerialize(encodableLog);
  if (!serializeResult.success) {
    return serializeResult;
  }
  const text = serializeResult.data;

  const name = `${generateEntryNameFromTime(date)}.json`;
  const path = join(parentDir, name);
  const writeResult = await writeTextFile({ path, text });
  return writeResult;
}
