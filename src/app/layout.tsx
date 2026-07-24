import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import "./globals.css"

export const metadata: Metadata = {
  title: "Alok T V | Full Stack & Backend Engineer",
  description:
    "Full Stack & Backend Engineer specializing in Node.js, TypeScript, Supabase (PostgreSQL), Firebase, and React.js. Building scalable backend systems and production-grade applications.",
  keywords: [
    "Full Stack Engineer",
    "Backend Engineer",
    "Node.js Developer",
    "TypeScript",
    "Supabase",
    "Firebase",
    "Portfolio",
    "Alok T V",
  ],
  authors: [{ name: "Alok T V" }],
  openGraph: {
    title: "Alok T V | Full Stack & Backend Engineer",
    description:
      "Full Stack & Backend Engineer specializing in Node.js, TypeScript, Supabase, Firebase, and React.js.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alok T V | Full Stack & Backend Engineer",
    description:
      "Full Stack & Backend Engineer specializing in Node.js, TypeScript, Supabase, Firebase, and React.js.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
