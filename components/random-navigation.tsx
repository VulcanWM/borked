"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function RandomNavigation() {
    const [position, setPosition] = useState({ top: 20, left: 50 })

    useEffect(() => {
        // Move navigation to random position every 3 seconds
        const interval = setInterval(() => {
            setPosition({
                top: Math.random() * 80 + 10,
                left: Math.random() * 80 + 10,
            })
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    const handleClick = (page: string) => {
        const messages = [
            `Sorry, the ${page} page is under construction! (Forever)`,
            `${page} page not found! Did you really think it existed?`,
            `Error 404: ${page} was never created!`,
            `${page}? Never heard of it!`,
        ]
        alert(messages[Math.floor(Math.random() * messages.length)])
    }

    return (
        <nav
            className="fixed z-50 transition-all duration-1000 ease-in-out"
            style={{
                top: `${position.top}%`,
                left: `${position.left}%`,
                transform: "translate(-50%, -50%)",
            }}
        >
            <div className="flex gap-2 flex-wrap bg-card/90 p-4 border-4 border-border backdrop-blur-sm shadow-2xl animate-wiggle">
                <Button onClick={() => handleClick("Home")} className="bg-primary text-primary-foreground font-bold" size="sm">
                    Home
                </Button>
                <Button
                    onClick={() => handleClick("About")}
                    className="bg-secondary text-secondary-foreground font-bold"
                    size="sm"
                >
                    About
                </Button>
                <Button onClick={() => handleClick("Contact")} className="bg-accent text-accent-foreground font-bold" size="sm">
                    Contact
                </Button>
                <Button
                    onClick={() => handleClick("Blog")}
                    className="bg-destructive text-destructive-foreground font-bold"
                    size="sm"
                >
                    Blog
                </Button>
            </div>
        </nav>
    )
}