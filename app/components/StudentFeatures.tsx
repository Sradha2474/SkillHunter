import { GraduationCap, Map, Building, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function StudentFeatures() {
  const features = [
    { icon: GraduationCap, title: "Skill Assessment", description: "Discover the skills you need for your dream job" },
    { icon: Map, title: "College Finder", description: "Find the best colleges offering your desired skills" },
    {
      icon: Building,
      title: "Campus Insights",
      description: "Get detailed information about college facilities and surroundings",
    },
    { icon: TrendingUp, title: "Market Trends", description: "Stay updated with the latest job market trends" },
  ]

  return (
    <section id="students" className="py-16 bg-gray-900/50 bg-blur">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-shadow">For Students</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-800/50 rounded-lg">
                <feature.icon className="w-12 h-12 text-avengers-blue mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-shadow">{feature.title}</h3>
                <p className="text-shadow">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Students using Avengers Career Guidance"
              width={400}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

