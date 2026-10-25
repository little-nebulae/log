import { z } from "zod";

import { LOG_LEVELS } from "@/constants";

export const LogLevelSchema = z.enum(LOG_LEVELS);
export type LogLevel = z.infer<typeof LogLevelSchema>;
