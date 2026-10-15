import { NonEmptyStringSchema } from "@little-nebulae/zod";
import { z } from "zod";

import { LogContextSchema } from "@/schemas/log/context";
import { LogIdSchema } from "@/schemas/log/id";
import { LogLevelSchema } from "@/schemas/log/level";
import { SequentialOperationsSchema } from "@/schemas/operation";

export const LogSchema = z.object({
  ...SequentialOperationsSchema.shape,
  id: LogIdSchema,
  level: LogLevelSchema,
  context: LogContextSchema,
  message: NonEmptyStringSchema,
});
export type Log = z.infer<typeof LogSchema>;
