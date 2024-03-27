import type { Metadata } from "next";
import "./globals.css";
import { jost } from "@/lib/fonts";
import { Providers } from "@/components/shared/Providers";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Lili Bee Jewels",
  description: "Premimum jewelry for the affordable prices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
