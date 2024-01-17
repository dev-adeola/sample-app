import { cache } from 'react';
import db from '@/lib/db';

export const getItem = cache(async (id) => {
    const item = await db.item.findUnique({ id })
    return item
})