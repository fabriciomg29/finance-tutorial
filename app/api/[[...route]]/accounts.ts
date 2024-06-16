import { Hono } from "hono"
import { clerkMiddleware, getAuth } from "@hono/clerk-auth"
import { HTTPException } from 'hono/http-exception'

import { db } from '@/db/drizzle'
import { accounts } from '@/db/schema'
import { eq } from "drizzle-orm"

const app = new Hono()
    .get(
        "/",
        clerkMiddleware(),
        async (c) => {
            const auth = getAuth(c)

            if (!auth?.userId) {
                throw new HTTPException(401, {
                    res: c.json({ error: 'Unauthenticated' }, 401)
                })
            }

            const data = await db
                .select({
                    id: accounts.id,
                    name: accounts.name,
                })
                .from(accounts)
                .where(eq(accounts.userId, auth.userId))

            return c.json({ data })
        })

export default app