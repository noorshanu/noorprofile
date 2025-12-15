import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noor.dev – Portfolio",
  description: "NOOR ALAM – Full Stack, Web3 & AI Engineer.",
  icons: {
    icon: "/fav.png",
    shortcut: "/fav.png",
    apple: "/fav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
