import type { LogContext, LogLevel } from "@/schemas/log";

interface ComposeLogMessageParams extends LogContext {
  level: LogLevel;
}
export function composeLogMessage({
  level,
  who,
  didWhat,
  inWhere,
  atWhen,
}: ComposeLogMessageParams) {
  return `[${level.toUpperCase()}] ${who} ${didWhat}${inWhere ? " " + inWhere : ""} ${atWhen.toISOString()}.`;
}
