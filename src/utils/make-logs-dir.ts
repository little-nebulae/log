import { makeDirectory } from "@little-nebulae/node-fs";
import { resolve } from "node:path";

export const DEFAULT_LOGS_DIR_NAME = "logs";

export async function makeLogsDir({
  name = DEFAULT_LOGS_DIR_NAME,
  cwd = process.cwd(),
  parent = "",
}: {
  name?: string;
  cwd?: string;
  parent?: string;
} = {}) {
  const path = resolve(cwd, parent, name);

  const makeResult = await makeDirectory({ path });
  return makeResult;
}
