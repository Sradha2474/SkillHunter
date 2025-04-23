import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="py-20 bg-gray-900/50 bg-blur">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-5xl font-bold mb-4 text-avengers-red text-shadow">Assemble Your Future</h1>
          <p className="text-xl mb-8 text-shadow">Discover your superpowers and conquer your dream career</p>
          <Button size="lg" className="bg-avengers-blue hover:bg-avengers-red transition-colors">
            Start Your Journey
          </Button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Avengers assembling for career guidance"
            width={600}
            height={400}
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}

