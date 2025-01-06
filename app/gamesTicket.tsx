import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { PricingSection } from '@/components/PricingSection'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PricingSection/>
      </main>
      <Footer />
    </div>
  )
}