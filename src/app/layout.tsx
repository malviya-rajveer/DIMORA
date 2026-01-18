import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ReactLenisProvider } from "@/components/ui/SmoothScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const brandMono = Playfair_Display({
  variable: "--font-brand-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "DIMORA",
  description: "Elegant residence or dwelling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${brandMono.variable} antialiased`}
      >
        <ReactLenisProvider>
          <Navbar></Navbar>
          {children}
        </ReactLenisProvider>
      </body>
    </html>
  );
}
