import localFont from "next/font/local";
import "./globals.css";

import { NavigationTopbar } from "@/components/navigation/topbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Helder Barbosa | Psicólogo Clínico e Psicanalista",
  description: "Psicólogo Clínico e Psicanalista em Ourinhos - São Paulo",
  openGraph: {
    siteName: "Helder Barbosa | Psicólogo Clínico e Psicanalista",
    title: "Helder Barbosa | Psicólogo Clínico e Psicanalista",
    type: "website",
    locale: "pt_BR",
    url: "https://helderbarbosa.com.br/",
    images: [
      {
        url: "https://helderbarbosa.com.br/consultorio-2.webp", // coloque essa imagem no public/og-image.webp
        width: 3177,
        height: 1786,
        alt: "Consultório do Psicólogo Helder Barbosa",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico", // Esse caminho vai buscar no /public
  },
  metadataBase: new URL("https://helderbarbosa.com.br"),
  alternates: {
    canonical: "/",
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
    <html lang="pt-BR">
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
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_AD_ID}`}
        />
        <Script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GOOGLE_AD_ID}');
          `}
        </Script>
        <Script>
          {`
            gtag('event', 'conversion', {'send_to': ${process.env.GOOGLE_AD_ID}/${process.env.GOOGLE_AD_SEND_TO_ID} });
          `}
        </Script>
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
