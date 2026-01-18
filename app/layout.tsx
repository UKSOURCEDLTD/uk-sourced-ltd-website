import type { Metadata } from "next";
import { Inter, Montserrat, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  metadataBase: new URL('https://www.uksourcedltd.com'),
  title: "UK Sourced Ltd | Amazon Growth Partners",
  description: "Autonomous Sales Funnel & Agency",
  openGraph: {
    title: "UK Sourced Ltd | Amazon Growth Partners",
    description: "Autonomous Sales Funnel & Agency",
    url: 'https://www.uksourcedltd.com',
    siteName: 'UK Sourced Ltd',
    locale: 'en_GB',
    type: 'website',
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light bg-soft-bg text-deep-charcoal">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} ${robotoMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <ChatWidget />
        <Footer />
      </body>
    </html>
  );
}
