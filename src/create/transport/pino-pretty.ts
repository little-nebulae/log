import type { TransportTargetOptions } from "pino";
import type { PrettyOptions } from "pino-pretty";
import type { Except } from "type-fest";

export const PINO_PRETTY_TRANSPORT_TARGET = "pino-pretty";
export type PinoPrettyTransportTarget = typeof PINO_PRETTY_TRANSPORT_TARGET;

export interface PinoPrettyTransportOptions extends TransportTargetOptions<PrettyOptions> {
  target: PinoPrettyTransportTarget;
}

export function createPinoPrettyTransport({
  level = "debug",
  options = {},
}: Except<PinoPrettyTransportOptions, "target">) {
  return {
    target: PINO_PRETTY_TRANSPORT_TARGET,
    level,
    options,
  } satisfies PinoPrettyTransportOptions;
}
