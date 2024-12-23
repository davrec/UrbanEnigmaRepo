import { Navbar } from '../components/Navbar'
import { RoomCarousel } from '../components/RoomCarousel'
import { Footer } from '../components/Footer'
import { Presentazione } from '@/components/Presentazione'
import { PricingSection } from '@/components/PricingSection'
import { PerfectFor } from '@/components/PerfectFor'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Presentazione />
        <RoomCarousel />
        <PerfectFor/>
        <PricingSection/>
      </main>
      <Footer />
    </div>
  )
}