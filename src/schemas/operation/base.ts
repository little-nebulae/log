import { NonEmptyStringSchema } from "@little-nebulae/zod-schemas";
import { z } from "zod";

import { OperationIdSchema } from "@/schemas/operation/id";
import { OperationPerformanceSchema } from "@/schemas/operation/performance";

export const OperationBaseSchema = z.object({
  id: OperationIdSchema,
  name: NonEmptyStringSchema,
  source: NonEmptyStringSchema,
  success: z.boolean(),
  input: z.unknown(),
  output: z.unknown(),
  performance: OperationPerformanceSchema,
});
export type OperationBase = z.infer<typeof OperationBaseSchema>;
