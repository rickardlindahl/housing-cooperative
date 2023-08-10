import { Config, connect } from "@planetscale/database";
import { Logger } from "drizzle-orm";
import { drizzle } from "drizzle-orm/planetscale-serverless";

import * as schema from "./schema";

export const createDatabase = (config: Config) =>
  drizzle(
    connect({
      ...config,
      fetch: (url: string, init: any) => {
        (init as any)["cache"] = undefined;
        return fetch(url, init);
      },
    }),
    {
      logger: process.env.NODE_ENV === "dev" ? new DatabaseLogger() : undefined,
      schema,
    },
  );

class DatabaseLogger implements Logger {
  logQuery(query: string, params: unknown[]) {
    console.log({ query, params });
  }
}
