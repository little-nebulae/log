import build from "pino-abstract-transport";

import type { NodeFsTransportOptions } from "@/transports/node-fs/types/options";

import { LogSchema } from "@/schemas/log";
import { makeDateDir } from "@/transports/node-fs/utils/make-date-dir";
import { writeLogFile } from "@/transports/node-fs/utils/write-log-file";

export async function nodeFsTransport(_options: NodeFsTransportOptions) {
  return build(async function (source) {
    for await (const object of source) {
      const parseLogResult = LogSchema.safeParse(object);
      if (!parseLogResult.success) {
        return;
      }
      const log = parseLogResult.data;

      const date = new Date();
      const makeDirResult = await makeDateDir({ date });
      if (!makeDirResult.success) {
        return;
      }
      const parentDir = makeDirResult.data;
      await writeLogFile({ log, date, parentDir });
    }
  });
}
