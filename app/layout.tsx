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
    "Premium cinematic drone shooting, aerial filming, video editing, web design and social-ready content for businesses in Cyprus.",
  icons: {
    icon: "/favicon.ico?v=3",
    shortcut: "/favicon.ico?v=3",
    apple: "/images/favicon.png?v=3",
  },
  openGraph: {
    title: "Altus Luna | Drone Video, Editing & Websites in Cyprus",
    description:
      "Premium cinematic drone shooting, aerial filming, video editing, web design and social-ready content for businesses in Cyprus.",
    url: "https://altusluna.com",
    siteName: "Altus Luna",
    images: [
      {
        url: "/images/altus-luna-og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    title: "Altus Luna | Drone Video, Editing & Websites in Cyprus",
    description:
      "Premium cinematic drone shooting, aerial filming, video editing, web design and social-ready content for businesses in Cyprus.",
    images: ["/images/altus-luna-og-image.png"],
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
