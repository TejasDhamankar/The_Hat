import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const displayFont = Roboto({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "700"],
});

const bodyFont = Roboto({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "The Hat - Branding, Marketing, Sales Growth",
  description:
    "The Hat is a full-service marketing company that builds, markets, and grows powerful brands.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
