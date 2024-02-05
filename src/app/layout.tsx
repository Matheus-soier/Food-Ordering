import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/footer/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ['400', '500', '700']});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="flex flex-col items-center">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
