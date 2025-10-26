import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./components/Providers";

export const metadata: Metadata = {
  title: "BTC Signal AI - AI-Powered Trading Signals",
  description: "AI-powered BTC trading signals directly on Farcaster & Base",
  openGraph: {
    title: "BTC Signal AI",
    description: "AI-powered BTC trading signals directly on Farcaster & Base",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
