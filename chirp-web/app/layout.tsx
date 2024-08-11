import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chirp",
  description: "Easily manage your site feedbacks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <TooltipProvider>
            <Header />
            <main className="px-4 py-4 md:px-12 md:py-4">
              {children}
              <Toaster />
            </main>
          </TooltipProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
