import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/landing-page/Header";
import Footer from "@/components/landing-page/Footer";
import LiveChat from "@/components/LiveChat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CleanSpark - Clean Energy. Reliable Power.",
  description:
    "Powering African homes and businesses with sustainable solar solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <LiveChat />
        <Footer />
      </body>
    </html>
  );
}
