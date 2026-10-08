import type { NodeEnv } from "@little-nebulae/node-env";

import { pino } from "pino";

export function createLogger({ nodeEnv }: { nodeEnv: NodeEnv }) {
  const logger = pino({ level: nodeEnv === "development" ? "debug" : "info" });
  return logger;
}
