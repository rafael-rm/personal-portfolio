import type React from "react"
import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "./globals.css"
import {LanguageProvider} from "@/contexts/language-context"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
    title: "Rafael Rodrigues | Software Developer",
    description:
        "Portfolio of Rafael Rodrigues, a back-end developer specializing in building robust, scalable systems and APIs."
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="dark">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        </head>
        <body className={`${inter.className} overflow-x-hidden`}>
        <LanguageProvider>{children}</LanguageProvider>
        </body>
        </html>
    )
}


