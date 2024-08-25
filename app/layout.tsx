import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import CustomSessionProvider from "@/components/SessionProvider";

const inter = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fake Bank Account App",
  description: "Fake Bank Account Integration for Developers",
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
          "min-h-screen bg-background font-sans antialiased dark bg-gradient-to-l from-[#1E201E] to-black",
          inter.className
        )}
      >
        <CustomSessionProvider>{children}</CustomSessionProvider>
      </body>
    </html>
  );
}
