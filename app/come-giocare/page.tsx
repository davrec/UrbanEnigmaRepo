import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { HeroComeGiocare } from '@/components/HeroComeGiocare'

export default function comeGiocare() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroComeGiocare/>
      </main>
      <Footer />
    </div>
  )
}