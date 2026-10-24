import { z } from "zod";

import type { SingleOperationSchemaType } from "@/schemas/operation/create/single";

import { OperationBaseSchema } from "@/schemas/operation/base";

export function createConcurrentOperationsSchema<
  Name extends string,
  InputSchema extends z.ZodType,
  OutputSchema extends z.ZodType,
  OperationsSchema extends z.ZodTuple<
    readonly [SingleOperationSchemaType, ...SingleOperationSchemaType[]]
  >,
>({
  name,
  inputSchema,
  outputSchema,
  operationsSchema,
}: {
  name: Name;
  inputSchema: InputSchema;
  outputSchema: OutputSchema;
  operationsSchema: OperationsSchema;
}) {
  return z.object({
    ...OperationBaseSchema.shape,
    name: z.literal(name),
    input: inputSchema,
    output: outputSchema,
    operations: operationsSchema,
  });
}
export type ConcurrentOperationsSchemaType = ReturnType<
  typeof createConcurrentOperationsSchema
>;
