import { Shield } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-gray-900/80 text-white p-4 bg-blur">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Shield className="w-8 h-8 text-avengers-blue" />
          <span className="text-2xl font-bold text-shadow">Avengers Career</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#students" className="hover:text-avengers-red transition-colors text-shadow">
                For Students
              </a>
            </li>
            <li>
              <a href="#retired" className="hover:text-avengers-red transition-colors text-shadow">
                For Retired
              </a>
            </li>
            <li>
              <a href="#game" className="hover:text-avengers-red transition-colors text-shadow">
                Game
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

