import {
  generateEntryNameFromDate,
  makeDirectoryRecursively,
} from "@little-nebulae/node-fs";
import { resolve } from "node:path";

import { DEFAULT_LOGS_DIR_RELATIVE_PATH } from "@/transports/node-fs/constants";

export async function makeDateDir({
  date,
  cwd = process.cwd(),
}: {
  date?: Date;
  cwd?: string;
}) {
  const name = generateEntryNameFromDate(date);
  const path = resolve(cwd, DEFAULT_LOGS_DIR_RELATIVE_PATH, name);

  const result = await makeDirectoryRecursively({ path });
  return result;
}
