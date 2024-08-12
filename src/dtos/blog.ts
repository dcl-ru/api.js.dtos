import {z} from 'zod';

export const PostSchema = z.object({
    slug: z.string(),
    title: z.string(),
    lead: z.string().nullable(),
    text: z.string().nullable(),
    imageUrl: z.string().nullable(),
    altText: z.string().nullable(),
    copyright: z.string().nullable(),
    copyrightUrl: z.string().nullable(),
    timestamp: z.string().nullable(),
});

export type PostDto = z.infer<typeof PostSchema>;

export const PostCardSchema = z.object({
    slug: z.string(),
    title: z.string(),
    lead: z.string().nullable(),
    imageUrl: z.string().nullable(),
    altText: z.string().nullable(),
    copyright: z.string().nullable(),
    copyrightUrl: z.string().nullable(),
    timestamp: z.coerce.date().nullable(),
});

export type PostCardDto = z.infer<typeof PostCardSchema>;
