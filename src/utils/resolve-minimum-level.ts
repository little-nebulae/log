import type { NodeEnvValue } from "@little-nebulae/node-env";
import type { LevelWithSilent, LevelWithSilentOrString } from "pino";

export function resolveMinimumLevel({
  level,
  levelEnv,
  nodeEnv,
}: {
  level?: LevelWithSilentOrString | undefined;
  levelEnv?: LevelWithSilent | undefined;
  nodeEnv: NodeEnvValue;
}): LevelWithSilentOrString {
  if (level !== undefined) {
    return level;
  }
  if (levelEnv !== undefined) {
    return levelEnv;
  }
  if (nodeEnv === "development") {
    return "debug";
  }
  return "warn";
}
