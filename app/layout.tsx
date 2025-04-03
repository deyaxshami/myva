import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Image from "next/image";
import {
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandInstagram
} from "@tabler/icons-react";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyVa",
  description: "MyVa is a service outsourcing company focused on generating highly qualified Real Estate Seller leads for Real Estate Agents and Investors. MyVa is your outsourcing spot for handling all those activities that you need to delegate in your business.",
  viewport: "width=device-width, initial-scale=1.0"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar></Navbar>
          {children}
        </ThemeProvider>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center mb-16">
          <span>
            Follow MyVA on:
          </span>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.linkedin.com/company/gomyva/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandLinkedin
              aria-hidden
              width={16}
              height={16}
            >
            </IconBrandLinkedin>
            LinkedIn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.facebook.com/people/MYVA/61567469493966/?sk=about"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandFacebook
              aria-hidden
              width={16}
              height={16}
            >
            </IconBrandFacebook>
            Facebook
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.instagram.com/reimyva/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandInstagram
              aria-hidden
              width={16}
              height={16}
            >
            </IconBrandInstagram>
            Instagram
          </a>
        </footer>
      </body>
    </html>
  );
}
