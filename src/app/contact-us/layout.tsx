import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me - Noor Alam",
  description:
    "Get in touch with Noor Alam for freelance projects, startup MVPs, Web3 audits, and smart contract development. Fast response guaranteed. Based in Dubai, UAE.",
  keywords: [
    "Contact Noor Alam",
    "Hire Full Stack Developer",
    "Web3 Developer Contact",
    "Freelance Developer Dubai",
    "Startup MVP Developer",
    "Web3 Audit Services",
    "Smart Contract Developer",
  ],
  openGraph: {
    title: "Contact Me - Noor Alam | Full Stack, Web3 & AI Engineer",
    description:
      "Get in touch for freelance projects, startup MVPs, Web3 audits, and smart contract development. Fast response guaranteed.",
    url: "https://www.nooralam.pro/contact-us",
    images: [
      {
        url: "/hireme.png",
        width: 1200,
        height: 630,
        alt: "Contact Noor Alam - Full Stack, Web3 & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Me - Noor Alam",
    description:
      "Get in touch for freelance projects, startup MVPs, Web3 audits, and smart contract development.",
    images: ["/hireme.png"],
  },
  alternates: {
    canonical: "https://www.nooralam.pro/contact-us",
  },
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

