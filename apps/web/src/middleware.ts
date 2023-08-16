import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

import { AUTH_ADMIN_ROLE_REQUIRED } from "./lib/code";

export const config = { matcher: ["/admin"] };

export default withAuth(
  function middleware(req) {
    if (
      req.nextUrl.pathname.startsWith("/admin") &&
      req.nextauth.token.role !== "admin"
    ) {
      const url = new URL("/", req.url);
      url.searchParams.append("code", AUTH_ADMIN_ROLE_REQUIRED);
      return NextResponse.redirect(url);
    }
  },
  {
    callbacks: {
      authorized({ token }) {
        return !!token;
      },
    },
  },
);
