import type { UnexpectedError } from "@little-nebulae/error";
import type { JsonStringifyError } from "@little-nebulae/json";
import type { AsyncResult } from "@little-nebulae/result";

import { jsonStringify } from "@little-nebulae/json";
import {
  generateEntryNameFromTime,
  writeTextFile,
} from "@little-nebulae/node-fs";
import { join } from "node:path";

import type { Log } from "@/schemas/log";

export async function writeLogFile({
  log,
  date,
  parentDir,
}: {
  log: Log;
  date: Date;
  parentDir: string;
}): AsyncResult<undefined, JsonStringifyError | UnexpectedError> {
  const stringifyResult = jsonStringify(log);
  if (!stringifyResult.success) {
    return stringifyResult;
  }
  const text = stringifyResult.data.value;

  const name = `${generateEntryNameFromTime(date)}.json`;
  const path = join(parentDir, name);
  const writeResult = await writeTextFile({ path, text });
  return writeResult;
}
