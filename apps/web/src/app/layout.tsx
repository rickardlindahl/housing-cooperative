import "@hc/ui/src/styles/globals.css";

import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@hc/ui";
import { Toaster } from "@hc/ui/src/components/ui/toaster";

import { NextAuthProvider } from "~/components/next-auth-provider";
import { TailwindIndicator } from "~/components/tailwind-indicator";
import { ThemeProvider } from "~/components/theme-provider";
import { metadata as siteMetadata } from "~/settings";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
        )}
      >
        <NextAuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </NextAuthProvider>
        <Toaster />
        <TailwindIndicator />
      </body>
    </html>
  );
}
