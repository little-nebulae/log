import type { LOG_LEVEL } from "@/constants";
import type { Log } from "@/schemas/log";

export abstract class Logger {
  abstract [LOG_LEVEL.INFO](log: Log): void;
  abstract [LOG_LEVEL.WARN](log: Log): void;
  abstract [LOG_LEVEL.ERROR](log: Log): void;
  abstract [LOG_LEVEL.FATAL](log: Log): void;
}
