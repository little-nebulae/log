import type { LOG_LEVEL } from "@/constants";
import type { Log } from "@/schemas/log";

export abstract class Logger {
  abstract [LOG_LEVEL.INFO]<TLog extends Log>(
    log: TLog,
    ...rest: unknown[]
  ): void;
  abstract [LOG_LEVEL.WARN]<TLog extends Log>(
    log: TLog,
    ...rest: unknown[]
  ): void;
  abstract [LOG_LEVEL.ERROR]<TLog extends Log>(
    log: TLog,
    ...rest: unknown[]
  ): void;
  abstract [LOG_LEVEL.FATAL]<TLog extends Log>(
    log: TLog,
    ...rest: unknown[]
  ): void;
}
