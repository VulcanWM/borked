"use client"

import type React from "react"

import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function ChaosForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const progress = useMemo(() => {
        const fields = Object.values(formData).filter(v => v.length > 0).length
        return (fields / 3) * 100
    }, [formData])

    useEffect(() => {
        if (progress >= 30) {
            const timer = setTimeout(() => {
                setFormData({ name: "", email: "", message: "" })
                alert("Oops! Form timed out! Please start over! 😈")
            }, 3000)

            return () => clearTimeout(timer)
        }
    }, [progress])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (progress === 100) {
            alert("Just kidding! Submission failed! Try again! 🎭")
            setFormData({ name: "", email: "", message: "" })
        }
    }

    return (
        <Card className="p-8 bg-card text-card-foreground border-4 border-border max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center animate-bounce">
                📝 Contact Form (That Definitely Works!) 📝
            </h2>

            <div className="mb-6">
                <div className="flex justify-between mb-2">
                    <span className="text-sm font-bold">Progress:</span>
                    <span className="text-sm font-bold">{progress.toFixed(0)}%</span>
                </div>
                <div className="w-full bg-muted h-4 border-2 border-border">
                    <div
                        className="bg-primary h-full transition-all duration-300 animate-pulse"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                {progress >= 30 && (
                    <p className="text-sm mt-2 text-destructive animate-shake font-bold">
                        ⚠️ WARNING: Form will reset in 3 seconds! Hurry! ⚠️
                    </p>
                )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-2 font-bold text-lg">Name:</label>
                    <Input
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your name..."
                        className="bg-input text-foreground"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-2 font-bold text-lg">Email:</label>
                    <Input
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="bg-input text-foreground"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-2 font-bold text-lg">Message:</label>
                    <textarea
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Type your message here..."
                        className="w-full p-2 bg-input text-foreground border-2 border-border min-h-32 font-sans"
                        required
                    />
                </div>

                <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/80 font-bold text-xl py-6"
                >
                    Submit (Good Luck!) 🚀
                </Button>
            </form>

            <p className="mt-4 text-center text-sm text-muted-foreground">
                * Form submissions are not actually saved anywhere. Obviously.
            </p>
        </Card>
    )
}