import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { HeroFaq } from '@/components/HeroFaq'
import { FAQs } from '@/components/FAQs'

export default function faq() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroFaq/>
        <FAQs/>
      </main>
      <Footer />
    </div>
  )
}