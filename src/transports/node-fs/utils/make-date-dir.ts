import {
  generateEntryNameFromDate,
  makeDirectoryRecursively,
} from "@little-nebulae/node-fs";
import { resolve } from "node:path";

import { DEFAULT_LOGS_DIR_RELATIVE_PATH } from "@/transports/node-fs/constants";

export async function makeDateDir(cwd = process.cwd()) {
  const date = generateEntryNameFromDate();
  const path = resolve(cwd, DEFAULT_LOGS_DIR_RELATIVE_PATH, date);

  const result = await makeDirectoryRecursively({ path });
  return result;
}
