import { Users } from 'lucide-react'

const pricingOptions = [
    {
        players: "1 giocatori",
        price: "30€",
        priceDetail: "/ per person",
        iconSize: 1
    },
  {
    players: "2 giocatori",
    price: "25€",
    priceDetail: "/ per person",
    iconSize: 2
  },
  {
    players: "4+ giocatori",
    price: "20€",
    priceDetail: "/ per person",
    iconSize: 4
  }
]

export function PricingSection() {
  return (
    <div className="w-full py-32" style={{
        backgroundImage: "url('images/sfondo.jpg')",
        backgroundPosition: "right center"
      }}>
      <div className="w-[90%] md:w-[60%] mx-auto">
        <h2 className="text-5xl font-bold text-secondary text-center mb-16">Le Nostre Tariffe</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingOptions.map((option, index) => (
            <div key={index} className="relative flex flex-col items-center bg-black p-8 rounded-lg backdrop-blur-lg bg-opacity-50">
              <div className="text-yellow-500 mb-4">
                {[...Array(option.iconSize)].map((_, i) => (
                  <Users key={i} className="w-8 h-8 inline-block -ml-2 first:ml-0" />
                ))}
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {option.price}
              </div>
              <div className="text-gray-400 mb-4">
                {option.priceDetail}
              </div>
              <div className="text-white text-lg">
                {option.players}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
