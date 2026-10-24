import type { Tagged } from "type-fest";

import { z } from "zod";

export type OperationId = Tagged<string, "OperationId">;
export const OperationIdSchema = z
  .uuidv7()
  .transform((id) => id as OperationId);
