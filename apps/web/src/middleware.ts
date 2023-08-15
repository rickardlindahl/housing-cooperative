import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export const config = { matcher: ["/admin"] };

export default withAuth(
  function middleware(req) {
    if (
      req.nextUrl.pathname.startsWith("/admin") &&
      req.nextauth.token.role !== "admin"
    ) {
      return NextResponse.redirect(new URL("/", req.url));
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
