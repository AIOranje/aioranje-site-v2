import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "@/components/footer"
import OranBot from "@/components/oran-bot"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import LanguageNotification from "@/components/language-notification"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AIOranje",
  description: "AIOranje moderne website",
  icons: {
    icon: "/favicon.ico",
    apple: "/images/aioranje-logo-new.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className="flex-1">{children}</div>
            <Footer />
            <OranBot />
            <LanguageNotification />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
