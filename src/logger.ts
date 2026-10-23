import type { LOG_LEVEL } from "@/constants";
import type { Log } from "@/schemas/log";

export abstract class Logger {
  abstract [LOG_LEVEL.INFO](log: Log, ...rest: unknown[]): void;
  abstract [LOG_LEVEL.WARN](log: Log, ...rest: unknown[]): void;
  abstract [LOG_LEVEL.ERROR](log: Log, ...rest: unknown[]): void;
  abstract [LOG_LEVEL.FATAL](log: Log, ...rest: unknown[]): void;
}
