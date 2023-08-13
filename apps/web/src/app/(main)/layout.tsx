import { MainNav } from "~/components/main-nav";
import { SignInButton } from "~/components/sign-in-button";
import { SiteFooter } from "~/components/site-footer";
import { mainNav } from "~/settings";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={mainNav.filter((nav) => !nav.disabled)} />
          <nav>
            <SignInButton />
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}