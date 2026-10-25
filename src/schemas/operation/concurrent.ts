import { z } from "zod";

import type { SingleOperationSchemaType } from "@/schemas/operation/single";

import { createSingleOperationSchema } from "@/schemas/operation/single";

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
  const SingleOperationSchema = createSingleOperationSchema({
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
