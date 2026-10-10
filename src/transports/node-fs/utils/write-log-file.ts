import { generateEntryNameFromTime } from "@little-nebulae/node-fs";
import { join } from "node:path";

import type { Log } from "@/types";

export async function writeLogFile({
  log,
  date,
  parentDir,
}: {
  log: Log;
  date: Date;
  parentDir: string;
}) {
  const name = `${generateEntryNameFromTime(date)}.json`;
  const path = join(parentDir, name);
}
