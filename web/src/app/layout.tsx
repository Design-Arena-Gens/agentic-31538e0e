import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-31538e0e.vercel.app"),
  title: {
    default: "Agents vs Builders vs Models",
    template: "%s | Agents vs Builders vs Models",
  },
  description:
    "Understand how AI models, builders, and agents relate to each other with real-world examples, comparison tables, and guidance for picking the right approach.",
  keywords: [
    "AI agents",
    "AI builders",
    "AI models",
    "agentic workflows",
    "builder platforms",
    "foundation models",
  ],
  openGraph: {
    title: "Agents vs Builders vs Models",
    description:
      "A concise guide to the differences between AI models, builder platforms, and autonomous agents.",
    url: "https://agentic-31538e0e.vercel.app",
    siteName: "Agents vs Builders vs Models",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agents vs Builders vs Models",
    description:
      "Compare the building blocks of modern AI stacks: models, builders, and autonomous agents.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-slate-950 text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
