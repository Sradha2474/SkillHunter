import Header from "./components/Header"
import Hero from "./components/Hero"
import StudentFeatures from "./components/StudentFeatures"
import RetiredFeatures from "./components/RetiredFeatures"
import GamePreview from "./components/GamePreview"
import Footer from "./components/Footer"
import GameBackground from "./components/GameBackground"

export default function Home() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <GameBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <StudentFeatures />
          <RetiredFeatures />
          <GamePreview />
        </main>
        <Footer />
      </div>
    </div>
  )
}

