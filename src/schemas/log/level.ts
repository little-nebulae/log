import { z } from "zod";

export const LOG_LEVEL = {
  INFO: "info",
  WARN: "warn",
  ERROR: "error",
  FATAL: "fatal",
} as const;
export const LogLevelSchema = z.enum([
  LOG_LEVEL.INFO,
  LOG_LEVEL.WARN,
  LOG_LEVEL.ERROR,
  LOG_LEVEL.FATAL,
]);
export type LogLevel = z.infer<typeof LogLevelSchema>;
