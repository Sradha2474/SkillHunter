"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"

export default function GamePreview() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section id="game" className="py-16 bg-gray-900/50 bg-blur">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-avengers-green text-shadow">Avengers Career Quest</h2>
          <p className="text-xl mb-8 text-shadow">Embark on an epic journey to conquer your dream career!</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Image
            src="/placeholder.svg?height=300&width=500"
            alt="Avengers Career Quest Game Preview"
            width={500}
            height={300}
            className="rounded-lg shadow-2xl"
          />
          <div className="text-center md:text-left">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-avengers-blue hover:bg-avengers-red transition-colors">
                  Preview Game
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-gray-800 text-white">
                <DialogHeader>
                  <DialogTitle className="text-avengers-red">Avengers Career Quest</DialogTitle>
                  <DialogDescription className="text-gray-300">
                    In this exciting game, you'll team up with an AI buddy to navigate the job market, acquire new
                    skills, and face challenges. Build your career "weapons" to defeat job obstacles and climb the
                    career ladder. But beware, as the AI might become your ultimate rival in the ever-evolving job
                    market!
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <p className="text-avengers-yellow">Key Features:</p>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>AI-powered career guidance</li>
                    <li>Skill acquisition challenges</li>
                    <li>Real-time market trend updates</li>
                    <li>Dynamic job market simulation</li>
                  </ul>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  )
}

