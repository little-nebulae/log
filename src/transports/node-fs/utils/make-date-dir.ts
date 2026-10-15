import type { UnexpectedError } from "@little-nebulae/error";
import type { AsyncResult } from "@little-nebulae/result";

import {
  generateEntryNameFromDate,
  makeDirectoryRecursively,
} from "@little-nebulae/node-fs";
import { succeed } from "@little-nebulae/result";
import { resolve } from "node:path";

import { DEFAULT_LOGS_DIR_RELATIVE_PATH } from "@/transports/node-fs/constants";

export async function makeDateDir({
  date,
  cwd = process.cwd(),
}: {
  date: Date;
  cwd?: string;
}): AsyncResult<string, UnexpectedError> {
  const name = generateEntryNameFromDate(date);
  const path = resolve(cwd, DEFAULT_LOGS_DIR_RELATIVE_PATH, name);

  const result = await makeDirectoryRecursively({ path });
  if (result.success) {
    return succeed(path);
  }
  return result;
}
