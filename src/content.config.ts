import {defineCollection} from 'astro:content';
import {glob} from 'astro/loaders';
import {z} from 'astro/zod';

const todoItems = defineCollection({
    loader: glob({base:'./src/content/items/', pattern:'*.md'}),
    schema: z.object({
        name: z.string(),
        description: z.string(),
        completed: z.boolean().default(false)
    })
})

export const collections = { todoItems };
