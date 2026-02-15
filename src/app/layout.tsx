import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AgentFlow - Agentic Workflow Marketplace",
  description: "Discover, share, and monetize pre-built automation workflows for GitHub. Supercharge your development with agentic workflows.",
  keywords: ["GitHub Actions", "Workflows", "Automation", "CI/CD", "Developer Tools"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans bg-bg-primary text-text-primary min-h-screen">
        {children}
      </body>
    </html>
  );
}
