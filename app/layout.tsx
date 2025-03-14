import type React from "react"
import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "./globals.css"
import {LanguageProvider} from "@/contexts/language-context"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
    title: "Rafael Rodrigues | Software Developer",
    description:
        "Portfolio of Rafael Rodrigues, a back-end developer specializing in building robust, scalable systems and APIs.",
    icons: {
        icon: '/icon.ico'
    }
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="dark">
        <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
        </body>
        </html>
    )
}

