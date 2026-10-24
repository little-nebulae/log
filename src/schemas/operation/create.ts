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

type OperationSchemaType<
  Name extends string = string,
  InputSchema extends z.ZodType = z.ZodType,
  OutputSchema extends z.ZodType = z.ZodType,
> = ReturnType<typeof createOperationSchema<Name, InputSchema, OutputSchema>>;

type OperationsSchemaType = z.ZodTuple<
  readonly [OperationSchemaType, ...OperationSchemaType[]]
>;

export function createConcurrentOperationsSchema<
  Name extends string,
  InputSchema extends z.ZodType,
  OutputSchema extends z.ZodType,
  OperationsSchema extends OperationsSchemaType,
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
