import {
  NonEmptyStringSchema,
  PositiveIntegerSchema,
} from "@little-nebulae/zod-schemas";
import { z } from "zod";

export const LogContextSchema = z.object({
  who: NonEmptyStringSchema,
  didWhat: NonEmptyStringSchema,
  inWhere: NonEmptyStringSchema.exactOptional(),
  atWhen: PositiveIntegerSchema,
});
export type LogContext = z.infer<typeof LogContextSchema>;
