import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { portfolioData } from "@/data/portfolio";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Starfield } from "@/components/layout/starfield";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(portfolioData.personal.siteUrl),
  title: "Amritanshu Shandilya | Full-Stack Developer & AI Enthusiast",
  description:
    "Personal portfolio of Amritanshu Shandilya, an Electronics & Communication Engineering student at SIT Tumkur, full-stack developer, and AI enthusiast building intelligent products and scalable web systems.",
  keywords: [
    "Amritanshu Shandilya",
    "Full-Stack Developer",
    "AI Enthusiast",
    "Electronics and Communication Engineering",
    "Siddaganga Institute of Technology",
    "Next.js Portfolio",
    "FastAPI",
    "Qdrant RAG",
    "React",
    "Socket.IO",
  ],
  authors: [{ name: portfolioData.personal.name, url: portfolioData.personal.githubUrl }],
  creator: portfolioData.personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: portfolioData.personal.siteUrl,
    title: "Amritanshu Shandilya | Full-Stack Developer & AI Enthusiast",
    description:
      "Explore the software engineering projects, AI retrieval systems, and technical background of Amritanshu Shandilya.",
    siteName: `${portfolioData.personal.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Amritanshu Shandilya | Full-Stack Developer & AI Enthusiast",
    description:
      "Engineering scalable web applications and AI-powered systems. ECE at Siddaganga Institute of Technology.",
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
  alternates: {
    canonical: portfolioData.personal.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.personal.name,
    jobTitle: "Full-Stack Developer & AI Enthusiast",
    url: portfolioData.personal.siteUrl,
    sameAs: [
      portfolioData.personal.githubUrl,
      portfolioData.personal.leetcodeUrl,
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Siddaganga Institute of Technology",
    },
    knowsAbout: [
      "Full-Stack Development",
      "Artificial Intelligence",
      "Retrieval-Augmented Generation (RAG)",
      "Next.js",
      "React",
      "FastAPI",
      "Vector Databases",
      "Data Structures and Algorithms",
    ],
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <Starfield />
          {/* Skip link for keyboard accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[60] px-4 py-2 bg-[#ccff00] text-black font-semibold rounded-lg shadow-lg"
          >
            Skip to main content
          </a>
          <Navbar />
          <PageWrapper>{children}</PageWrapper>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
