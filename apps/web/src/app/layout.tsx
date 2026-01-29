import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const satoshi = localFont({
  src: [
    {
      path: "../fonts/Satoshi-Variable.woff2",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-VariableItalic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Binit Gupta",
  description: "Binit Gupta's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} ${geistSans.variable} ${geistMono.variable} antialiased relative `}
      >
        <div className="relative flex flex-col items-center inset-0 h-screen w-screen bg-white bg-[linear-gradient(to_right,#ff580060_1px,transparent_1px),linear-gradient(to_bottom,#ff580060_1px,transparent_1px)] bg-size-[164px_164px] after:absolute after:inset-0 after:bg-[linear-gradient(to_right,#ff580060_1px,transparent_1px),linear-gradient(to_bottom,#ff580060_1px,transparent_1px)] after:bg-size-[164px_164px] bg-position-[-20px_0px,0px_-20px] after:bg-position-[-40px_0px,0px_-40px]">
          {children}
        </div>
      </body>
    </html>
  );
}
