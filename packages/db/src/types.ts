import { InferModel } from "drizzle-orm";

import * as schema from "./schema";

export type User = InferModel<typeof schema.user>;
export type Account = InferModel<typeof schema.account>;
export type Session = InferModel<typeof schema.session>;
export type VerificationToken = InferModel<typeof schema.verificationToken>;
