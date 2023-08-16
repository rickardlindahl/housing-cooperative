"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useToast, type Toast } from "@hc/ui/src/components/ui/use-toast";

import { type Code } from "~/lib/code";

const codeToToast: { [key in Code]: Toast } = {
  AUTH_ADMIN_ROLE_REQUIRED: {
    title: "Unauthorized",
    description: "You must be an admin to access that page",
    variant: "destructive",
  },
};

export function ToastCodeListener() {
  const searchParams = useSearchParams();
  const { toast } = useToast();

  const code = searchParams.get("code");

  useEffect(
    function handleToast() {
      if (!code || !codeToToast[code]) {
        return;
      }
      toast(codeToToast[code]);
    },
    [toast, code],
  );

  return null;
}
