import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "./providers";
// Removed Google Fonts import (next/font/google) - was causing hang during compilation

export const metadata: Metadata = {
  title: "Aditya Chaturvedi",
  description: "Computer Science engineer building across data, cloud, DevOps, and full-stack development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased transition-colors duration-300`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
