import localFont from "next/font/local";
import "./globals.css";

import { NavigationTopbar } from "@/components/navigation/topbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Helder Barbosa",
  description: "Psicólogo Clínico e Psicanalista",
};

const gabriola = localFont({
  src: [
    {
      path: "./fonts/gabriola.ttf",
      weight: "400",
      style: "normal",
    }
  ]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
