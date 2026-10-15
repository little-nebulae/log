import build from "pino-abstract-transport";

import type { NodeFsTransportOptions } from "@/transports/node-fs/types/options";

import { LogSchema } from "@/schemas/log";
import { makeDateDir } from "@/transports/node-fs/utils/make-date-dir";

export async function nodeFsTransport(_options: NodeFsTransportOptions) {
  return build(async function (source) {
    for await (const object of source) {
      const log = LogSchema.parse(object);
    }
  });
}
