import type { NodeEnv } from "@little-nebulae/node-env";
import type { LevelWithSilent, TransportTargetOptions } from "pino";
import type { PrettyOptions } from "pino-pretty";
import type { Except } from "type-fest";

import { resolveMinimumLevel } from "@/utils/resolve-minimum-level";

export const PINO_PRETTY_TRANSPORT_LEVEL_ENV_KEY =
  "PINO_PRETTY_TRANSPORT_LEVEL";
export type PinoPrettyTransportLevelEnv = {
  [K in typeof PINO_PRETTY_TRANSPORT_LEVEL_ENV_KEY]?: LevelWithSilent;
};
export interface PinoPrettyTransportEnv
  extends NodeEnv, PinoPrettyTransportLevelEnv {}

export const PINO_PRETTY_TRANSPORT_TARGET = "pino-pretty";
export type PinoPrettyTransportTarget = typeof PINO_PRETTY_TRANSPORT_TARGET;

export interface PinoPrettyTransportOptions extends TransportTargetOptions<PrettyOptions> {
  target: PinoPrettyTransportTarget;
}

interface CreatePinoPrettyTransportParams extends Except<
  PinoPrettyTransportOptions,
  "target"
> {
  env: PinoPrettyTransportEnv;
}
export function createPinoPrettyTransport({
  level,
  options = {},
  env,
}: CreatePinoPrettyTransportParams) {
  return {
    target: PINO_PRETTY_TRANSPORT_TARGET,
    level: resolveMinimumLevel({
      level,
      levelEnv: env.PINO_PRETTY_TRANSPORT_LEVEL,
      nodeEnv: env.NODE_ENV,
    }),
    options,
  } satisfies PinoPrettyTransportOptions;
}
