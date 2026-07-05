import type { Metadata } from "next";
import { Poppins, Roboto, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ThemeProvider } from "@/lib/theme-context";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rahul Dahal · Software engineer",
    template: "%s · Rahul Dahal",
  },
  description:
    "Rahul Dahal · software engineer working on JavaScript, scalability, and DevOps. Writing, notes, and the tools I keep coming back to.",
  authors: [{ name: "Rahul Dahal" }],
  openGraph: {
    siteName: "Rahul Dahal",
    type: "website",
    title: "Rahul Dahal · Software engineer",
    description:
      "Writing, notes, and tools from a software engineer working on JavaScript, scalability, and DevOps.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Dahal · Software engineer",
    description:
      "Writing, notes, and tools from a software engineer working on JavaScript, scalability, and DevOps.",
  },
  alternates: {
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
  other: {
    "theme-color": "#0b1020",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="grain min-h-screen">
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-foreground"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main" className="min-h-[calc(100vh-3.5rem)]">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
