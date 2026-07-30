import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono-space",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://sodienyewariso.com"
  ),
  title: "Sodienye Wariso — Graphic & Brand Designer",
  description:
    "Independent designer crafting bold identities, print, and motion for brands that deserve to be remembered.",
  openGraph: {
    title: "Sodienye Wariso — Graphic & Brand Designer",
    description:
      "Independent designer crafting bold identities, print, and motion for brands that deserve to be remembered.",
    images: ["/assets/brand-donp.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
