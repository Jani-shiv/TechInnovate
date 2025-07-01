import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FloatingCTA from "@/components/FloatingCTA"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TechInnovate - Innovation Platform",
  description: "A platform for tech innovation covering future of work, sustainability, health, and more",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <FloatingCTA />
        <Footer />
      </body>
    </html>
  )
}
