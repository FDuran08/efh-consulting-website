import type { Metadata } from "next";
import { Inter, Aboreto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const aboreto = Aboreto({
  variable: "--font-aboreto",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "EFH Consulting Group | Web Development & Digital Marketing",
    template: "%s | EFH Consulting Group",
  },
  description: "Professional web development, paid ad marketing, and social media management for businesses. Based in Palm Springs, California, serving clients nationwide.",
  keywords: ["web development", "paid ads", "social media management", "digital marketing", "Palm Springs", "consulting", "business services"],
  authors: [{ name: "EFH Consulting Group" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "EFH Consulting Group",
    title: "EFH Consulting Group | Web Development & Digital Marketing",
    description: "Professional web development, paid ad marketing, and social media management for businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${aboreto.variable} font-sans antialiased`}>
        <Analytics />
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
