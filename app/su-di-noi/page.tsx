import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { HeroSuDiNoi } from '@/components/HeroSuDiNoi'

export default function suDiNoi() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSuDiNoi/>
      </main>
      <Footer />
    </div>
  )
}