import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manajemen Standar Bulk",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="../public/SB Logo.svg" />
      </head>
      <body
        className={`${inter.className} min-h-screen font-sans transition-colors`}
      >
        {children}
      </body>
    </html>
  );
}

// test commit
