import { NonEmptyStringSchema } from "@little-nebulae/zod-schemas";
import { z } from "zod";

import { OperationIdSchema } from "@/schemas/operation/id";
import { OperationPerformanceSchema } from "@/schemas/operation/performance";

export function createOperationSchema<
  Name extends string,
  InputSchema extends z.ZodType,
  OutputSchema extends z.ZodType,
>({
  name,
  inputSchema,
  outputSchema,
}: {
  name: Name;
  inputSchema: InputSchema;
  outputSchema: OutputSchema;
}) {
  return z.object({
    id: OperationIdSchema,
    name: z.literal(name),
    source: NonEmptyStringSchema,
    success: z.boolean(),
    input: inputSchema,
    output: outputSchema,
    performance: OperationPerformanceSchema,
  });
}
export type OperationSchemaType = ReturnType<typeof createOperationSchema>;
