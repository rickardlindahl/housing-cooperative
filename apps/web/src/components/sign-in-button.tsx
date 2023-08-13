"use client";

import { cn } from "@hc/ui";
import { Button, buttonVariants } from "@hc/ui/src/components/ui/button";
import { signIn } from "next-auth/react";

export function SignInButton() {
  return (
    <Button
      className={cn(
        buttonVariants({ variant: "secondary", size: "sm" }),
        "px-4",
      )}
      onClick={() => signIn()}
    >
      Sign in
    </Button>
  );
}
