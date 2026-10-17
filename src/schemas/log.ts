import type { Tagged } from "type-fest";

import {
  NonEmptyStringSchema,
  PositiveIntegerSchema,
} from "@little-nebulae/zod";
import { z } from "zod";

import type { OperationId } from "@/schemas/operation";

import { LOG_LEVELS } from "@/constants";
import { SequentialOperationsSchema } from "@/schemas/operation";

export type LogId = Tagged<OperationId, "LogId">;
export const LogIdSchema = z.uuidv7().transform((id) => id as LogId);

export const LogLevelSchema = z.enum(LOG_LEVELS);
export type LogLevel = z.infer<typeof LogLevelSchema>;

export const LogContextSchema = z.object({
  who: NonEmptyStringSchema,
  didWhat: NonEmptyStringSchema,
  inWhere: NonEmptyStringSchema.exactOptional(),
  atWhen: PositiveIntegerSchema,
});
export type LogContext = z.infer<typeof LogContextSchema>;

export const LogSchema = z.object({
  ...SequentialOperationsSchema.shape,
  id: LogIdSchema,
  level: LogLevelSchema,
  context: LogContextSchema,
  message: NonEmptyStringSchema,
});
export type Log = z.infer<typeof LogSchema>;
