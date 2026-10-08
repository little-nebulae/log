import type { EncodableValue } from "@little-nebulae/json";
import type { PositiveInteger } from "@little-nebulae/number-types";
import type { NonEmptyString, Uuid } from "@little-nebulae/string-types";
import type { Level } from "pino";
import type { LiteralUnion } from "type-fest";

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

export type SystemActorKind = "system";
export type UserActorKind = "user";
export type SystemActor = { kind: SystemActorKind };
export type AuthStat<IsRequired extends boolean> = IsRequired extends false
  ? { isRequired: IsRequired }
  :
      | {
          isRequired: IsRequired;
          isAuthenticated: false;
        }
      | {
          isRequired: IsRequired;
          isAuthenticated: true;
          isAuthorized: boolean;
        };

export type ActorKind = LiteralUnion<"system" | "user" | "request", string>;
export type Actor<
  Kind extends ActorKind,
  IsAuthRequired extends boolean = false,
> = {
  kind: Kind;
  auth: Kind extends "system"
    ? { isRequired: false }
    : IsAuthRequired extends false
      ? { isRequired: IsAuthRequired }
      :
          | {
              isRequired: IsAuthRequired;
              isAuthenticated: false;
            }
          | {
              isRequired: IsAuthRequired;
              isAuthenticated: true;
              isAuthorized: boolean;
            };
};

export interface Log<
  Who extends Actor<ActorKind, boolean>,
> extends SequentialOperations {
  level: Level;
  who: Who;
  message: NonEmptyString;
}
