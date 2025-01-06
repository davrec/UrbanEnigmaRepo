import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { PricingSection } from '@/components/PricingSection'
import { PerfectFor } from '@/components/PerfectFor'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero/>
        <PerfectFor/>
        <PricingSection/>
      </main>
      <Footer />
    </div>
  )
}