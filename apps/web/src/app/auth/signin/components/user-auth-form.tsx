"use client";

import { useRouter } from "next/navigation";
import { Button } from "@hc/ui/src/components/ui/button";
import { Input } from "@hc/ui/src/components/ui/input";
import { Label } from "@hc/ui/src/components/ui/label";
import { useToast } from "@hc/ui/src/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";

import { loginSchema, type LoginSchema } from "~/lib/auth/schema";

export function UserAuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const { toast } = useToast();
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginSchema> = async (credentials) => {
    const response = await signIn("credentials", {
      redirect: false,
      ...credentials,
    });

    if (!response.ok) {
      return toast({
        title: "Uh oh! Something went wrong.",
        description:
          response.error ??
          "There was a problem signing in. Please check your credentials and try again.",
        variant: "destructive",
      });
    }

    router.push(
      response.url
        ? new URL(response.url).searchParams.get("callbackUrl")
        : "/",
    );
  };

  return (
    <div className="grid gap-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="mt-2 text-xs italic text-red-500">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="********"
              autoComplete="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="mt-2 text-xs italic text-red-500">
                {errors.password?.message}
              </p>
            )}
          </div>
          <Button type="submit">Sign in</Button>
        </div>
      </form>
    </div>
  );
}
