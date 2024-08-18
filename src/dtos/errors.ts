import {z} from 'zod';

export const APIErrorSchema = z.object({
    requestId: z.string(),
    code: z.coerce.number(),
    error: z.string(),
});

export type APIErrorType = z.infer<typeof APIErrorSchema>;

