import type { EncodableValue } from "@little-nebulae/json";
import type { PositiveInteger } from "@little-nebulae/number-types";
import type { NonEmptyString, Uuid } from "@little-nebulae/string-types";
import type { Level } from "pino";
import type { StructuredCloneable } from "type-fest";

export interface Perf {
  start: PositiveInteger;
  end: PositiveInteger;
  duration: PositiveInteger;
}

export interface Operation {
  id: Uuid<"7">;
  name: NonEmptyString;
  source: NonEmptyString;
  perf: Perf;
  success: boolean;
  input: EncodableValue;
  output: EncodableValue;
}

export interface ConcurrentOperations extends Operation {
  operations: Operation[];
}

export interface SequentialOperations extends Operation {
  operations: (Operation | ConcurrentOperations)[];
}

export interface LogContext {
  who: NonEmptyString;
  didWhat: NonEmptyString;
  inWhere?: NonEmptyString;
  atWhen: Date;
}

export interface Log extends SequentialOperations {
  level: Level;
  context: LogContext;
  message: NonEmptyString;
}

export type CreateTransportOptions<T extends StructuredCloneable> = T;
