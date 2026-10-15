import type { Tagged } from "type-fest";

import { z } from "zod";

export type LogId = Tagged<string, "LogId">;
export const LogIdSchema = z.uuidv7().transform((id) => id as LogId);
