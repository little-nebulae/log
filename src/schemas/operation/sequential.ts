import { z } from "zod";

import type { OperationSchemaType } from "@/schemas/operation";
import type { ConcurrentOperationsSchemaType } from "@/schemas/operation/concurrent";

import { createOperationSchema } from "@/schemas/operation";

export type SequentialOperationsTuple = z.ZodTuple<
  readonly [
    OperationSchemaType | ConcurrentOperationsSchemaType,
    ...(OperationSchemaType | ConcurrentOperationsSchemaType)[],
  ]
>;

export function createSequentialOperationsSchema<
  Name extends string,
  InputSchema extends z.ZodType,
  OutputSchema extends z.ZodType,
  OperationsSchema extends SequentialOperationsTuple,
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
