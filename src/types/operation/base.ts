import type { NonEmptyString, Uuid } from "@little-nebulae/string-types";

import type { Perf } from "@/types/perf";

export type OperationBase = {
  id: Uuid<"7">;
  name: NonEmptyString;
  source: NonEmptyString;
  perf: Perf;
};
