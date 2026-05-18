import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Altus Luna | Drone Video, Editing & Websites in Cyprus",
    template: "%s | Altus Luna",
  },
  description:
    "Premium cinematic drone shooting, aerial filming, video editing, social media content, and website builds for local businesses, property professionals, service brands, and small businesses.",
  icons: {
    icon: "/favicon.ico?v=3",
    shortcut: "/favicon.ico?v=3",
    apple: "/images/favicon.png?v=3",
  },
  openGraph: {
    images: ["/images/favicon.png?v=3"],
  },
  twitter: {
    images: ["/images/favicon.png?v=3"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
