import { Briefcase, BookOpen, PiggyBank, Store } from "lucide-react"
import Image from "next/image"

export default function RetiredFeatures() {
  const features = [
    { icon: Briefcase, title: "Job Opportunities", description: "Explore suitable job options for retirees" },
    { icon: BookOpen, title: "Continuous Learning", description: "Discover new skills and courses tailored for you" },
    { icon: PiggyBank, title: "Investment Guidance", description: "Get personalized investment advice" },
    { icon: Store, title: "Business Ideas", description: "Explore entrepreneurship opportunities" },
  ]

  return (
    <section id="retired" className="py-16 bg-gray-900/50 bg-blur">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-shadow">For Retired Persons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center order-2 md:order-1">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Retired persons using Avengers Career Guidance"
              width={400}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 order-1 md:order-2">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-800/50 rounded-lg">
                <feature.icon className="w-12 h-12 text-avengers-yellow mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-shadow">{feature.title}</h3>
                <p className="text-shadow">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

