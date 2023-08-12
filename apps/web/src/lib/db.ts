import { createDatabase } from "@hc/db";

import { env } from "./env/server";

export const db = createDatabase({
  url: env.DATABASE_URL,
});
