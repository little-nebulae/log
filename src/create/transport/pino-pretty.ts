import type { NodeEnv } from "@little-nebulae/node-env";
import type {
  LevelWithSilent,
  LevelWithSilentOrString,
  TransportTargetOptions,
} from "pino";
import type { PrettyOptions } from "pino-pretty";
import type { Except } from "type-fest";

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
  let minimumLogLevel: LevelWithSilentOrString;
  if (level !== undefined) {
    minimumLogLevel = level;
  } else if (env.PINO_PRETTY_TRANSPORT_LEVEL !== undefined) {
    minimumLogLevel = env.PINO_PRETTY_TRANSPORT_LEVEL;
  } else if (env.NODE_ENV === "development") {
    minimumLogLevel = "debug";
  } else {
    minimumLogLevel = "warn";
  }

  return {
    target: PINO_PRETTY_TRANSPORT_TARGET,
    level: minimumLogLevel,
    options,
  } satisfies PinoPrettyTransportOptions;
}
