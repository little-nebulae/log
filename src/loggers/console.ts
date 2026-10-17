import type { Log } from "@/schemas/log";

import { LOG_LEVEL } from "@/constants";
import { Logger } from "@/loggers";

export class ConsoleLogger extends Logger {
  [LOG_LEVEL.INFO](log: Log) {
    console.log(log);
  }
  [LOG_LEVEL.WARN](log: Log) {
    console.warn(log);
  }
  [LOG_LEVEL.ERROR](log: Log) {
    console.error(log);
  }
  [LOG_LEVEL.FATAL](log: Log) {
    console.error(log);
  }
}
