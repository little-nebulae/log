import type { Tagged } from "type-fest";

import { z } from "zod";

import type { OperationId } from "@/schemas/operation/id";

export type LogId = Tagged<OperationId, "LogId">;
export const LogIdSchema = z.uuidv7().transform((id) => id as LogId);
