import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hypernovation - AI, iOS Apps, SaaS & Premium Design",
  description: "Building the next generation of digital products. AI, iOS App Development, SaaS, E-commerce, and high-end UI/UX design.",
  keywords: ["AI", "iOS Apps", "SaaS", "Web Design", "E-commerce", "Shopify", "UI/UX"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
