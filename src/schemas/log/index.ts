import { z } from "zod";

import type { SequentialOperationsTuple } from "@/schemas/operation/sequential";

import { LogContextSchema } from "@/schemas/log/context";
import { LogIdSchema } from "@/schemas/log/id";
import { LogLevelSchema } from "@/schemas/log/level";
import { createSequentialOperationsSchema } from "@/schemas/operation/sequential";

export function createLogSchema<
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

export type Log<
  Name extends string = string,
  InputSchema extends z.ZodType = z.ZodType,
  OutputSchema extends z.ZodType = z.ZodType,
  OperationsSchema extends SequentialOperationsTuple =
    SequentialOperationsTuple,
> = z.infer<
  ReturnType<
    typeof createLogSchema<Name, InputSchema, OutputSchema, OperationsSchema>
  >
>;
