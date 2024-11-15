import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import AuthProvider from "@/components/providers/auth-provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen max-w-[1440px] mx-auto bg-first text-second-foreground leading-normal font-medium antialiased"
        )}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
