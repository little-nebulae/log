import type { LogContext } from "@/schemas/log/context";
import type { LogLevel } from "@/schemas/log/level";

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
  return `[${level.toUpperCase()}] ${who} ${didWhat}${inWhere ? " " + inWhere : ""} ${new Date(atWhen).toISOString()}.`;
}
