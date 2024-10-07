import type { Metadata } from "next";

import "./globals.css";
const Navbar = dynamic(() => import("./../../components/Navbar"), { ssr: true });
const Footer = dynamic(() => import("./../../components/Footer"), { ssr: false });
import dynamic from "next/dynamic";  
 

export const metadata: Metadata = {
  title: "Nieruchomości w Batumi",
  description: "Nieruchomości w Batumi, Gruzja. Znajdź swoją wymarzoną nieruchomość już dziś!",
  
};

// RootLayout.tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <link rel="icon" href="/dupa.png" sizes="128x128" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-[70px]"> {/* Adjust pt-[70px] to match your Navbar height */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

