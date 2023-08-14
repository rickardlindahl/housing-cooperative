import { getServerSession } from "next-auth";

import { MainNav } from "~/components/main-nav";
import { SignInButton } from "~/components/sign-in-button";
import { SiteFooter } from "~/components/site-footer";
import { UserNav } from "~/components/user-nav";
import { mainNav } from "~/settings";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={mainNav.filter((nav) => !nav.disabled)} />
          <nav>
            {!session?.user ? (
              <SignInButton />
            ) : (
              <UserNav user={session.user} />
            )}
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
