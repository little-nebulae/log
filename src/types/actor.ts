import type { ValueOf } from "type-fest";

import type { ACTOR_KIND } from "@/constants";

export type ActorKind = ValueOf<typeof ACTOR_KIND>;

export interface ActorBase<T extends ActorKind> {
  kind: T;
}

export type AuthState<IsRequired extends boolean> = IsRequired extends false
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

export interface SystemActor extends ActorBase<"system"> {}

export interface ServiceActor<
  IsAuthRequired extends boolean = true,
> extends ActorBase<"service"> {
  isInternal: boolean;
  auth: AuthState<IsAuthRequired>;
}

export interface VisitorActor<
  IsAuthRequired extends boolean = false,
> extends ActorBase<"visitor"> {
  auth: AuthState<IsAuthRequired>;
}

export interface UserActor extends ActorBase<"service"> {
  auth: AuthState<true>;
}
