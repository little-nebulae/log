import { makeDirectoryRecursively } from "@little-nebulae/node-fs";
import { resolve } from "node:path";

import { DEFAULT_LOGS_DIR_RELATIVE_PATH } from "@/transports/node-fs/constants";

export async function makeLogsDir(cwd = process.cwd()) {
  const path = resolve(cwd, DEFAULT_LOGS_DIR_RELATIVE_PATH);

  const result = await makeDirectoryRecursively({ path });
  return result;
}
