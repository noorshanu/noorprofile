import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nooralam.pro"),
  title: {
    default: "Noor Alam – Full Stack, Web3 & AI Engineer | Portfolio",
    template: "%s | Noor Alam",
  },
  description:
    "Full-stack engineer with 6+ years of experience building scalable, production-grade systems. Specializing in React, Next.js, Node.js, Web3, Solidity, and AI integration. Based in Dubai, UAE.",
  keywords: [
    "Noor Alam",
    "Full Stack Developer",
    "Web3 Developer",
    "AI Engineer",
    "React Developer",
    "Next.js Developer",
    "Blockchain Developer",
    "Solidity Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "DeFi Developer",
    "Smart Contracts",
    "Dubai Developer",
    "Portfolio",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Noor Alam" }],
  creator: "Noor Alam",
  publisher: "Noor Alam",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.nooralam.pro",
    siteName: "Noor Alam Portfolio",
    title: "Noor Alam – Full Stack, Web3 & AI Engineer",
    description:
      "Full-stack engineer with 6+ years shipping high-impact products across modern SaaS, DeFi, and AI. Building scalable, production-grade systems.",
    images: [
      {
        url: "/fav.png",
        width: 1200,
        height: 630,
        alt: "Noor Alam - Full Stack, Web3 & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noor Alam – Full Stack, Web3 & AI Engineer",
    description:
      "Full-stack engineer with 6+ years shipping high-impact products across modern SaaS, DeFi, and AI.",
    creator: "@CodingGamer4",
    images: ["/fav.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/fav.png",
    shortcut: "/fav.png",
    apple: "/fav.png",
  },
  alternates: {
    canonical: "https://www.nooralam.pro",
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#000000" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white antialiased">
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GV55EMB1NN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GV55EMB1NN');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
