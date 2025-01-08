'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Che cos'è Urban enigma?",
      answer: `Urban enigma è un'esperienza di gioco all'aperto che trasforma la città di Napoli in un grande campo di gioco. 
               Attraverso percorsi interattivi, i giocatori risolvono enigmi e scoprono installazioni nascoste guidati dalla nostra app dedicata.`,
    },
    {
      question: "Come funziona il gioco?",
      answer: `Dopo aver scelto e acquistato un percorso tramite la nostra app, riceverai istruzioni su dove iniziare. 
               Ogni giocatore avrà strumenti diversi sul proprio smartphone, come mappe, bussole o funzioni di messaggistica, per collaborare e risolvere gli enigmi lungo il percorso.`,
    },
    {
      question: "Quante persone possono partecipare?",
      answer: `I nostri percorsi sono progettati per gruppi da 2 a 4 persone. Tuttavia, è possibile adattare l'esperienza per gruppi più grandi, suddividendoli in squadre che possono competere tra loro.`,
    },
  ];

  return (
    <div className="w-full pb-32 bg-bgChiaro text-secondary">
      <div className="container mx-auto flex flex-col items-center w-[80%] sm:w-[60%]">
        {/* Titolo della sezione */}
        <h3 className="text-3xl sm:text-5xl text-bgScuro font-bold mb-20 text-center mt-20">
          FAQs
        </h3>

        {/* Contenitore delle colonne */}
        <div className="flex flex-col sm:flex-row justify-between gap-8 w-full">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="flex-1 bg-bgScuro p-6 rounded-lg shadow-lg"
            >
              <div className="flex justify-between items-center">
                <h4 className="text-2xl font-semibold text-primary">{faq.question}</h4>
                <button
                  onClick={() => toggleDropdown(index)}
                  className="text-primary focus:outline-none"
                  aria-label="Toggle answer"
                >
                  {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </button>
              </div>
              {openIndex === index && (
                <p className="text-lg leading-relaxed text-secondary mt-4">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Testo aggiuntivo in basso a destra */}
        <div className="w-full mt-10 text-right">
          <p className="text-lg text-bgScuro">
            Per leggerne di più{' '}
            <Link href="/faq" className="text-white font-semibold hover:underline">
              clicca qui
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
