import type { NonEmptyString } from "@little-nebulae/string-types";
import type { Level } from "pino";

import type { LogContext } from "@/types";

interface ComposeLogMessageParams extends LogContext {
  level: Level;
}
export function composeLogMessage({
  level,
  who,
  didWhat,
  inWhere,
  atWhen,
}: ComposeLogMessageParams) {
  return `[${level.toUpperCase()}] ${who} ${didWhat}${inWhere ? " " + inWhere : ""} ${atWhen.toISOString()}.` as NonEmptyString;
}
