import { NODE_ENV_VALUE } from "@little-nebulae/node-env";

export const LOG_LEVEL = {
  INFO: "info",
  WARN: "warn",
  ERROR: "error",
  FATAL: "fatal",
} as const;
export const LOG_LEVELS = [
  LOG_LEVEL.INFO,
  LOG_LEVEL.WARN,
  LOG_LEVEL.ERROR,
  LOG_LEVEL.FATAL,
] as const;

export const DEFAULT_MINIMUM_LOG_LEVEL = {
  [NODE_ENV_VALUE.DEVELOPMENT]: LOG_LEVEL.INFO,
  [NODE_ENV_VALUE.TESTING]: LOG_LEVEL.INFO,
  [NODE_ENV_VALUE.STAGING]: LOG_LEVEL.WARN,
  [NODE_ENV_VALUE.PRODUCTION]: LOG_LEVEL.WARN,
} as const;

export const DEFAULT_LOGS_DIR_NAME = "logs";
