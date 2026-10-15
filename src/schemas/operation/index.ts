import { NonEmptyStringSchema } from "@little-nebulae/zod";
import { z } from "zod";

import { OperationIdSchema } from "@/schemas/operation/id";
import { OperationPerformanceSchema } from "@/schemas/operation/performance";

export const OperationSchema = z.object({
  id: OperationIdSchema,
  name: NonEmptyStringSchema,
  source: NonEmptyStringSchema,
  success: z.boolean(),
  input: z.unknown(),
  output: z.unknown(),
  performance: OperationPerformanceSchema,
});
export type Operation = z.infer<typeof OperationSchema>;

export const ConcurrentOperationsSchema = z.object({
  ...OperationSchema.shape,
  operations: z.array(OperationSchema),
});
export type ConcurrentOperations = z.infer<typeof ConcurrentOperationsSchema>;
