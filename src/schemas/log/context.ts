import { NonEmptyStringSchema } from "@little-nebulae/zod";
import { z } from "zod";

export const LogContextSchema = z.object({
  who: NonEmptyStringSchema,
  didWhat: NonEmptyStringSchema,
  inWhere: NonEmptyStringSchema.exactOptional(),
  atWhen: z.date(),
});
export type LogContext = z.infer<typeof LogContextSchema>;
