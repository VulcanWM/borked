import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
    title: "🎉 WELCOME TO THE WORST WEBSITE EVER 🎉",
    description: "A masterpiece of terrible UX design for the Borked UI Jam",
    icons: {
        icon: [
            {
                url: "/clown.png",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/clown.png",
                media: "(prefers-color-scheme: dark)",
            },
            {
                url: "/clown.svg",
                type: "image/svg+xml",
            },
        ],
        apple: "/clown.png",
    },
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className="font-sans antialiased">
                {children}
            </body>
        </html>
    )
}
