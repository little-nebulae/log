import { PositiveIntegerSchema } from "@little-nebulae/zod";
import { z } from "zod";

export const OperationPerformanceSchema = z
  .object({
    start: PositiveIntegerSchema,
    end: PositiveIntegerSchema,
    duration: PositiveIntegerSchema,
  })
  .refine(({ start, end }) => end > start);
export type OperationPerformance = z.infer<typeof OperationPerformanceSchema>;
