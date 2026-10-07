import type { Operation } from "@/types/operation";

export interface SequentialOperations extends Operation {
  operations: Operation[];
}
