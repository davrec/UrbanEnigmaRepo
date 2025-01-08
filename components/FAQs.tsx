'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
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
      answer: `Dopo aver scelto e acquistato un percorso tramite la nostra app, riceverai istruzioni su dove iniziare. Ogni giocatore avrà strumenti diversi sul proprio smartphone, come mappe, bussole o funzioni di messaggistica, per collaborare e risolvere gli enigmi lungo il percorso.`,
    },
    {
      question: "Quante persone possono partecipare?",
      answer: `I nostri percorsi sono progettati per gruppi da 2 a 4 persone. Tuttavia, è possibile adattare l'esperienza per gruppi più grandi, suddividendoli in squadre che possono competere tra loro.`,
    },
    {
      question: "È necessario prenotare in anticipo?",
      answer: `Sì, è consigliabile prenotare il percorso desiderato tramite la nostra app o il sito web per garantire disponibilità e ricevere tutte le informazioni necessarie prima dell'inizio del gioco.`,
    },
    {
      question: "Qual è la durata di ogni percorso?",
      answer: `Ogni percorso ha una durata variabile tra 1 / 2 ore, a seconda della complessità degli enigmi e del ritmo del gruppo.`,
    },
    {
      question: "È adatto ai bambini?",
      answer: `I nostri percorsi sono pensati per adulti e ragazzi sopra i 12 anni. I bambini più piccoli possono partecipare accompagnati da adulti, ma alcuni enigmi potrebbero risultare complessi per loro.`,
    },
    {
      question: "Cosa succede in caso di maltempo?",
      answer: `In caso di condizioni meteorologiche avverse, è possibile stoppare e riprendere il gioco successivamente. La sicurezza e il comfort dei nostri giocatori sono la nostra priorità.`,
    },
    {
      question: "È necessario avere una connessione internet durante il gioco?",
      answer: `Sì, è consigliabile avere una connessione internet stabile durante l'intera esperienza per garantire il corretto funzionamento dell'app e la ricezione degli indizi in tempo reale.`,
    },
    {
      question: "Come posso contattare il supporto durante il gioco?",
      answer: `Se incontri difficoltà o hai bisogno di assistenza durante il percorso, puoi utilizzare la funzione di supporto integrata nell'app o contattare il nostro team tramite i canali di contatto forniti sul sito.`,
    },
  ];

  return (
    <div className="w-full pb-32 bg-bgScuro text-secondary">
      <div className="container mx-auto flex flex-col items-center w-[80%] sm:w-[60%]">
        {/* Titolo della sezione */}
        <h3 className="text-3xl sm:text-5xl text-white font-bold mb-20 text-center mt-20">FAQs</h3>

        {/* Contenitore dei singoli elementi FAQ */}
        <div className="flex flex-col gap-8 w-full mt-10">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-bgChiaro p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-center">
                <h4 className="text-2xl font-bold text-secondary">{faq.question}</h4>
                <button
                  onClick={() => toggleDropdown(index)}
                  className="text-secondary focus:outline-none"
                  aria-label="Toggle answer"
                >
                  {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </button>
              </div>
              {openIndex === index && (
                <p className="text-lg leading-relaxed text-secondary mt-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
