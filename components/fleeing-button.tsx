"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function FleeingButton() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [attempts, setAttempts] = useState(0)

    const handleMouseEnter = () => {
        // Move button to random position
        const maxX = 200
        const maxY = 100
        const newX = Math.random() * maxX - maxX / 2
        const newY = Math.random() * maxY - maxY / 2

        setPosition({ x: newX, y: newY })
        setAttempts((prev) => prev + 1)
    }

    return (
        <div className="relative h-32 flex items-center justify-center">
            <Button
                onMouseEnter={handleMouseEnter}
                onTouchStart={handleMouseEnter}
                className="bg-primary text-primary-foreground hover:bg-primary absolute transition-all duration-300 font-bold"
                style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                }}
            >
                {attempts === 0 ? "Click Me!" : attempts < 5 ? "Ha ha!" : attempts < 10 ? "Keep trying!" : "Never give up! 😈"}
            </Button>
        </div>
    )
}