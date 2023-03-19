import { createTRPCRouter } from "~/server/api/trpc";
import { sourceRouter } from "~/server/api/routers/source";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  source: sourceRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
