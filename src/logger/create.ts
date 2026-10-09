import type { NodeEnv } from "@little-nebulae/node-env";

import { pino } from "pino";

export function createLogger({ env }: { env: NodeEnv }) {
  const logger = pino({
    level: env.NODE_ENV === "development" ? "debug" : "info",
  });
  return logger;
}
