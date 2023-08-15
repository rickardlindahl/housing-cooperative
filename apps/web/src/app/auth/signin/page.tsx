import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { authOptions } from "~/lib/auth";
import { UserAuthForm } from "./components/user-auth-form";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in using your credentials.",
};

function getCallbackUrl(searchParams: {
  [key: string]: string | string[] | undefined;
}) {
  const callbackUrl = searchParams.callbackUrl ?? "/";
  return typeof callbackUrl === "string" ? callbackUrl : callbackUrl[0];
}

export default async function AuthenticationPage({
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect(getCallbackUrl(searchParams));
  }

  return (
    <div className="container relative grid h-screen flex-col items-center justify-center lg:max-w-none lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1>
          <p className="text-sm text-muted-foreground">
            Enter your email and password below to sign in
          </p>
        </div>
        <UserAuthForm />
      </div>
    </div>
  );
}
