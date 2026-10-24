import {
  NonEmptyStringSchema,
  PositiveIntegerSchema,
} from "@little-nebulae/zod-schemas";
import { z } from "zod";

import { OperationIdSchema } from "@/schemas/operation/id";

export const OperationBaseSchema = z.object({
  id: OperationIdSchema,
  name: z.string(),
  source: NonEmptyStringSchema,
  success: z.boolean(),
  input: z.unknown(),
  output: z.unknown(),
  performance: z
    .object({
      start: PositiveIntegerSchema,
      end: PositiveIntegerSchema,
      duration: PositiveIntegerSchema,
    })
    .refine(({ start, end }) => end > start),
});
export type OperationBase = z.infer<typeof OperationBaseSchema>;
