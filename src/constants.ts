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
  DEVELOPMENT: LOG_LEVEL.INFO,
  PRODUCTION: LOG_LEVEL.WARN,
} as const;

export const DEFAULT_LOGS_DIR_NAME = "logs";
