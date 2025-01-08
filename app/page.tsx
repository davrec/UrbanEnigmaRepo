import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { PerfectFor } from '@/components/PerfectFor'
import { Hero } from '@/components/Hero'
import { AboutSection } from '@/components/AboutSection'
import { FAQSection } from '@/components/FaqSection'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero/>
        <PerfectFor/>
        <AboutSection/>
        <FAQSection/>
      </main>
      <Footer />
    </div>
  )
}