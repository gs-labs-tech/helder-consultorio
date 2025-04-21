import localFont from "next/font/local";
import "./globals.css";

import { NavigationTopbar } from "@/components/navigation/topbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psicólogo Helder Barbosa",
  description: "Psicólogo Clínico e Psicanalista",
  openGraph: {
    siteName: "Helder Barbosa",
    type: "website",
    locale: "pt_BR",
    url: "https://helderbarbosa.com.br/",
  },
};

const gabriola = localFont({
  src: [
    {
      path: "./fonts/gabriola.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          fetchPriority="high"
          as="image"
          href="/consultorio.webp"
          type="image/webp"
        ></link>
        <link
          rel="preload"
          fetchPriority="high"
          as="image"
          href="/consultorio-2.webp"
          type="image/webp"
        ></link>
        <link
          rel="preload"
          fetchPriority="high"
          as="image"
          href="/helder.webp"
          type="image/webp"
        ></link>
      </head>

      <body className={cn(gabriola.className, `antialiased bg-background`)}>
        <ScrollArea type="always" className="w-screen h-screen">
          <div className="flex flex-col font-sans text-sm">
            <NavigationTopbar />
            {children}
          </div>
        </ScrollArea>
      </body>
    </html>
  );
}
