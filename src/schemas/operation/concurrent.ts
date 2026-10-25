import { z } from "zod";

import type { OperationSchemaType } from "@/schemas/operation";

import { createOperationSchema } from "@/schemas/operation";

export function createConcurrentOperationsSchema<
  Name extends string,
  InputSchema extends z.ZodType,
  OutputSchema extends z.ZodType,
  OperationsSchema extends z.ZodTuple<
    readonly [OperationSchemaType, ...OperationSchemaType[]]
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
  const SingleOperationSchema = createOperationSchema({
    name,
    inputSchema,
    outputSchema,
  });
  return z.object({
    ...SingleOperationSchema.shape,
    operations: operationsSchema,
  });
}
export type ConcurrentOperationsSchemaType = ReturnType<
  typeof createConcurrentOperationsSchema
>;
