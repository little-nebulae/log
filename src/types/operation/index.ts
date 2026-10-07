import type { EncodableValue } from "@little-nebulae/json";
import type { NonEmptyString, Uuid } from "@little-nebulae/string-types";

import type { Perf } from "@/types/perf";

export type Operation = {
  id: Uuid<"7">;
  name: NonEmptyString;
  source: NonEmptyString;
  perf: Perf;
  success: boolean;
  input: EncodableValue;
  output: EncodableValue;
};
