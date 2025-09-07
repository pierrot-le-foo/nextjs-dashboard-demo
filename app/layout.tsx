import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pierre Drouillet | Full Stack AI Developer",
  description: "Expert full-stack developer specializing in AI-powered applications. Creating intelligent solutions that bridge cutting-edge AI with exceptional user experiences.",
  keywords: ["AI Developer", "Full Stack Developer", "Machine Learning", "React", "Next.js", "Python", "TensorFlow", "Web Development"],
  authors: [{ name: "Pierre Drouillet" }],
  icons: [
    {
      url: "/pierre.png",
      sizes: "any",
    },
    {
      url: "/pierre.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      url: "/pierre.png", 
      sizes: "32x32",
      type: "image/png",
    },
  ],
  openGraph: {
    title: "Pierre Drouillet | Full Stack AI Developer",
    description: "Expert full-stack developer specializing in AI-powered applications.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/pierre.png",
        width: 1200,
        height: 630,
        alt: "Pierre Drouillet - Full Stack AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pierre Drouillet | Full Stack AI Developer",
    description: "Expert full-stack developer specializing in AI-powered applications.",
    images: ["/pierre.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
