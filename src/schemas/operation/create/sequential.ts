import { z } from "zod";

import type { ConcurrentOperationsSchemaType } from "@/schemas/operation/create/concurrent";
import type { SingleOperationSchemaType } from "@/schemas/operation/create/single";

import { createSingleOperationSchema } from "@/schemas/operation/create/single";

export function createSequentialOperationsSchema<
  Name extends string,
  InputSchema extends z.ZodType,
  OutputSchema extends z.ZodType,
  OperationsSchema extends z.ZodTuple<
    readonly [
      SingleOperationSchemaType | ConcurrentOperationsSchemaType,
      ...(SingleOperationSchemaType | ConcurrentOperationsSchemaType)[],
    ]
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
