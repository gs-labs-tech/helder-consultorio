import "@fontsource/gabriela";
import "./globals.css";

import { NavigationTopbar } from "@/components/navigation/topbar";
import type { Metadata } from "next";
import { ScrollArea } from "@/components/ui/scroll-area";

export const metadata: Metadata = {
  title: "Helder Barbosa",
  description: "Psicólogo Clínico e Psicanalista",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-gabriela antialiased bg-background`}>
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
