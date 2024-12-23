import { Users, PuzzleIcon as PuzzlePiece, Users2 } from 'lucide-react'

export function PerfectFor() {
  const sections = [
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "AMICI E FAMIGLIE",
      description: "Siete un gruppo di amici o una famiglia in cerca di un'esperienza unica, divertente e stimolante? Non cercate oltre, venite a trovarci e preparatevi a vivere insieme un'avventura indimenticabile!"
    },
    {
      icon: <PuzzlePiece className="w-12 h-12 text-primary" />,
      title: "APPASSIONATI",
      description: "Hai già la passione per le Escape Room? Allora le nostre stanze sono proprio quello che cerchi! Preparati a vivere emozioni uniche, sfide coinvolgenti e un'esperienza che non dimenticherai!"
    },
    {
      icon: <Users2 className="w-12 h-12 text-primary" />,
      title: "TEAMBUILDING",
      description: "Vuoi rendere il tuo team ancora più unito e motivato? Contattaci e trasforma il tuo gruppo in una squadra vincente!"
    }
  ]

  return (
    <div className="w-full pb-32 bg-[#1a1a1a]">

      <div className="w-[90%] md:w-[60%] mx-auto">

        <div className="text-center mb-16">
          <p className="text-primary text-lg mb-4">Un&apos;esperienza adrenalinica</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            LE NOSTRE STANZE SONO PERFETTE PER
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-12">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col items-center text-center pb-12">
              <div className="mb-6">
                {section.icon}
              </div>
              <h3 className="text-white text-xl font-bold mb-4">
                {section.title}
              </h3>
              <p className="text-secondary">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
