import type { NonEmptyString } from "type-fest";

import { z } from "zod";

import { OperationBaseSchema } from "@/schemas/operation/base";

export function createOperationSchema<
  Name extends string,
  InputSchema extends z.ZodType,
  OutputSchema extends z.ZodType,
>({
  name,
  inputSchema,
  outputSchema,
}: {
  name: NonEmptyString<Name>;
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
