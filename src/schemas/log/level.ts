import { z } from "zod";

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

export const LogLevelSchema = z.enum(LOG_LEVELS);
export type LogLevel = z.infer<typeof LogLevelSchema>;
