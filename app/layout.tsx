import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Renier Vargas's First Next.js application",
  description: "Generated by Renier Vargas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >
      <Navbar/>
        <div className="flex flex-col items-center justify-center p-24">
          {children}
        </div>
      </body>
    </html>
  );
}
