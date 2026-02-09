import React from "react"
import type { Metadata, Viewport } from "next";
import { Dancing_Script, Quicksand } from "next/font/google";

import "./globals.css";

const _quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});
const _dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  title: "Will you be my Valentine?",
  description: "A special Valentine proposal just for you",
};

export const viewport: Viewport = {
  themeColor: "#f9a8c9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${_quicksand.variable} ${_dancingScript.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
