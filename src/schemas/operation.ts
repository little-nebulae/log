import type { Tagged } from "type-fest";

import { SuperJSONResultSchema } from "@little-nebulae/superjson";
import {
  NonEmptyStringSchema,
  PositiveIntegerSchema,
} from "@little-nebulae/zod";
import { z } from "zod";

export type OperationId = Tagged<string, "OperationId">;
export const OperationIdSchema = z
  .uuidv7()
  .transform((id) => id as OperationId);

export const OperationPerformanceSchema = z
  .object({
    start: PositiveIntegerSchema,
    end: PositiveIntegerSchema,
    duration: PositiveIntegerSchema,
  })
  .refine(({ start, end }) => end > start);
export type OperationPerformance = z.infer<typeof OperationPerformanceSchema>;

export const OperationInputSchema = z.union([z.json(), SuperJSONResultSchema]);
export type OperationInput = z.infer<typeof OperationInputSchema>;

export const OperationOutputSchema = OperationInputSchema;
export type OperationOutput = z.infer<typeof OperationOutputSchema>;

export const OperationSchema = z.object({
  id: OperationIdSchema,
  name: NonEmptyStringSchema,
  source: NonEmptyStringSchema,
  success: z.boolean(),
  input: OperationInputSchema,
  output: OperationOutputSchema,
  performance: OperationPerformanceSchema,
});
export type Operation = z.infer<typeof OperationSchema>;

export const ConcurrentOperationsSchema = z.object({
  ...OperationSchema.shape,
  operations: z.array(OperationSchema),
});
export type ConcurrentOperations = z.infer<typeof ConcurrentOperationsSchema>;

export const SequentialOperationsSchema = z.object({
  ...OperationSchema.shape,
  operations: z.array(z.union([OperationSchema, ConcurrentOperationsSchema])),
});
export type SequentialOperations = z.infer<typeof SequentialOperationsSchema>;
