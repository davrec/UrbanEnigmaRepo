import { Navbar } from '../../components/Navbar'
import { HeroBook } from '../../components/HeroBook'
import { Footer } from '../../components/Footer'
import { PricingSection } from '@/components/PricingSection'

export default function gamesTicket() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroBook/>
        <PricingSection/>
      </main>
      <Footer />
    </div>
  )
}