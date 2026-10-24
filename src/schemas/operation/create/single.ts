import { z } from "zod";

import { OperationBaseSchema } from "@/schemas/operation/base";

export function createSingleOperationSchema<
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
    ...OperationBaseSchema.shape,
    name: z.literal(name),
    input: inputSchema,
    output: outputSchema,
  });
}
export type SingleOperationSchemaType = ReturnType<
  typeof createSingleOperationSchema
>;
