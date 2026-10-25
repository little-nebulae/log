import { z } from "zod";

import type { ConcurrentOperationsSchemaType } from "@/schemas/operation/create/concurrent";
import type { SingleOperationSchemaType } from "@/schemas/operation/create/single";

import { LogContextSchema } from "@/schemas/log/context";
import { LogIdSchema } from "@/schemas/log/id";
import { LogLevelSchema } from "@/schemas/log/level";
import { createSequentialOperationsSchema } from "@/schemas/operation/create/sequential";

export function createLogSchema<
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
  const SequentialOperationsSchema = createSequentialOperationsSchema({
    name,
    inputSchema,
    outputSchema,
    operationsSchema,
  });
  return z.object({
    ...SequentialOperationsSchema.shape,
    id: LogIdSchema,
    level: LogLevelSchema,
    context: LogContextSchema,
  });
}
