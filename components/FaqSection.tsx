'use client';

import Link from 'next/link';

export function FAQSection() {
  return (
    <div className="w-full pb-32 bg-bgChiaro text-secondary">
      <div className="container mx-auto flex flex-col items-center w-[80%] sm:w-[60%]">
        {/* Titolo della sezione */}
        <h3 className="text-3xl sm:text-5xl text-bgScuro font-bold mb-20 text-center mt-20">
          FAQs
        </h3>

        {/* Contenitore delle colonne */}
        <div className="flex flex-col sm:flex-row justify-between gap-8 w-full">
          {/* Card 1 */}
          <div className="flex-1 bg-bgScuro p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold mb-4 text-primary">Che cos&apos;è Urban enigma?</h4>
            <p className="text-lg leading-relaxed">
            Urban enigma è un&apos;esperienza di gioco all&apos;aperto che trasforma la città di Napoli in un grande campo di gioco. 
            Attraverso percorsi interattivi, i giocatori risolvono enigmi e scoprono installazioni nascoste guidati dalla nostra app dedicata.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex-1 bg-bgScuro p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold mb-4 text-primary">Come funziona il gioco?</h4>
            <p className="text-lg leading-relaxed">
            Dopo aver scelto e acquistato un percorso tramite la nostra app, riceverai istruzioni su dove iniziare. 
            Ogni giocatore avrà strumenti diversi sul proprio smartphone, come mappe, bussole o funzioni di messaggistica, per collaborare e risolvere gli enigmi lungo il percorso.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex-1 bg-bgScuro p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold mb-4 text-primary">Quante persone possono partecipare?</h4>
            <p className="text-lg leading-relaxed">
            I nostri percorsi sono progettati per gruppi da 2 a 4 persone. Tuttavia, è possibile adattare l&apos;esperienza per gruppi più grandi, suddividendoli in squadre che possono competere tra loro.
            </p>
          </div>
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
