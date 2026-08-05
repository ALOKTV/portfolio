import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { Outfit, Fira_Code } from "next/font/google"
import { Global3DBg } from "@/components/global-3d-bg"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
})

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
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${firaCode.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <Global3DBg />
          
          <div className="relative z-0">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
