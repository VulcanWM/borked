"use client"

import { useState, useEffect} from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { FleeingButton } from "@/components/fleeing-button"
import { ChaosForm } from "@/components/chaos-form"
import { RandomNavigation } from "@/components/random-navigation"

export default function Home() {
    const [clicks, setClicks] = useState(0)
    const [showSecret, setShowSecret] = useState(false)
    const [rotation, setRotation] = useState(0)

    useEffect(() => {
        // Randomly rotate the page every 5 seconds
        const interval = setInterval(() => {
            setRotation(Math.random() * 10 - 5)
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    const handleUselessClick = () => {
        setClicks((prev) => prev + 1)
        if (clicks > 9) {
            setShowSecret(true)
            alert("Congratulations! You clicked 10 times and achieved... absolutely nothing! 🎉")
        }
    }

    return (
        <main
            className="min-h-screen p-4 md:p-8 transition-transform duration-1000"
            style={{ transform: `rotate(${rotation}deg)` }}
        >
            {/* Chaotic header that shakes */}
            <header className="text-center mb-8 animate-shake">
                <h1 className="text-4xl md:text-7xl font-bold mb-4 animate-rainbow">🎪 WELCOME TO CHAOS 🎪</h1>
                <p className="text-lg md:text-2xl animate-wiggle">The Most AMAZING Website You{"'"}ve NEVER Seen!!!</p>
            </header>

            <RandomNavigation />

            {/* Grid of chaotic cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {/* Card 1: Useless counter */}
                <Card className="p-6 bg-card text-card-foreground border-4 border-border animate-pulse">
                    <h2 className="text-2xl font-bold mb-4 text-center">✨ Click Counter ✨</h2>
                    <p className="text-center mb-4 text-lg">
                        You{"'"}ve clicked {clicks} times!
                    </p>
                    <Button
                        onClick={handleUselessClick}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/80 font-bold text-xl"
                    >
                        CLICK ME!!!
                    </Button>
                    {showSecret && (
                        <p className="mt-4 text-center text-sm animate-bounce">🎊 Secret achieved! Nothing happens! 🎊</p>
                    )}
                </Card>

                {/* Card 2: Spinning content */}
                <Card className="p-6 bg-secondary text-secondary-foreground border-4 border-border">
                    <div className="animate-spin-slow">
                        <h2 className="text-2xl font-bold mb-4 text-center">🌀 SPINNING TEXT 🌀</h2>
                        <p className="text-center">Why is this spinning? Nobody knows! But it looks AMAZING!!!</p>
                    </div>
                </Card>

                {/* Card 3: Fleeing button */}
                <Card className="p-6 bg-accent text-accent-foreground border-4 border-border">
                    <h2 className="text-2xl font-bold mb-4 text-center">🏃 Catch The Button! 🏃</h2>
                    <p className="text-center mb-4">Try to click it... if you can!!!</p>
                    <FleeingButton />
                </Card>

                {/* Card 4: Broken search */}
                <Card className="p-6 bg-destructive text-destructive-foreground border-4 border-border animate-wiggle">
                    <h2 className="text-2xl font-bold mb-4 text-center">🔍 Search (Broken) 🔍</h2>
                    <Input
                        placeholder="Search for... wait, what?"
                        className="mb-4 bg-input text-foreground"
                        onChange={(e) => {
                            if (e.target.value.length > 5) {
                                e.target.value = ""
                                alert("Oops! Too many characters! Try again! 😈")
                            }
                        }}
                    />
                    <Button
                        className="w-full bg-primary text-primary-foreground"
                        onClick={() => alert("Search not implemented! Try again later! (Never)")}
                    >
                        Search
                    </Button>
                </Card>

                {/* Card 5: Upside down card */}
                <Card className="p-6 bg-muted text-muted-foreground border-4 border-border transform rotate-180">
                    <h2 className="text-2xl font-bold mb-4 text-center">🙃 Why Am I Upside Down? 🙃</h2>
                    <p className="text-center">Good question! Maybe try turning your screen upside down?</p>
                </Card>

                {/* Card 6: Random messages */}
                <Card className="p-6 bg-card text-card-foreground border-4 border-border">
                    <h2 className="text-2xl font-bold mb-4 text-center animate-bounce">🎲 Random Facts! 🎲</h2>
                    <Button
                        className="w-full bg-secondary text-secondary-foreground mb-2"
                        onClick={() => {
                            const facts = [
                                "Did you know? This button does nothing!",
                                "Fun fact: Comic Sans is the best font ever!",
                                "Breaking news: You just wasted your time!",
                                "Did you know? This website is intentionally terrible!",
                                "Fun fact: You're still here!",
                            ]
                            alert(facts[Math.floor(Math.random() * facts.length)])
                        }}
                    >
                        Tell Me A Fact!
                    </Button>
                </Card>
            </div>

            {/* The legendary form that resets */}
            <ChaosForm />

            {/* Footer with annoying marquee effect */}
            <footer className="mt-12 text-center border-t-4 border-border pt-8">
                <div className="overflow-hidden whitespace-nowrap">
                    <div className="inline-block animate-marquee-infinite">
                        <span className="text-xl font-bold mx-8">🎉 MADE WITH LOVE AND CHAOS FOR BORKED UI JAM 2025 🎉</span>
                        <span className="text-xl font-bold mx-8">🎨 DESIGNED TO BE TERRIBLE 🎨</span>
                        <span className="text-xl font-bold mx-8">⚠️ YOUR EYES MAY HURT ⚠️</span>
                        <span className="text-xl font-bold mx-8">🤡 THIS IS NOT A BUG, IT{"'"}S A FEATURE 🤡</span>
                    </div>
                </div>
                <p className="mt-4 text-sm animate-pulse">© 3000 Chaos Industries. All wrongs reserved.</p>
            </footer>
        </main>
    )
}