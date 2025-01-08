'use client';

export function FAQs() {
  return (
    <div className="w-full pb-32 bg-bgScuro text-secondary">
      <div className="container mx-auto flex flex-col items-center w-[80%] sm:w-[60%]">

        {/* Contenitore dei singoli elementi FAQ */}
        <div className="flex flex-col gap-8 w-full mt-10">
          {/* FAQ 1 */}
          <div className="bg-bgChiaro p-6 rounded-lg shadow-lg mt-10">
            <h4 className="text-2xl font-bold mb-4 text-secondary">Che cos&apos;è Urban enigma?</h4>
            <p className="text-lg leading-relaxed">
              Urban enigma è un&apos;esperienza di gioco all&apos;aperto che trasforma la città di Napoli in un grande campo di gioco.
              Attraverso percorsi interattivi, i giocatori risolvono enigmi e scoprono installazioni nascoste guidati dalla nostra app dedicata.
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="bg-bgChiaro p-6 rounded-lg shadow-lg mt-10">
            <h4 className="text-2xl font-bold mb-4 text-secondary">Come funziona il gioco?
            </h4>
            <p className="text-lg leading-relaxed">
              Dopo aver scelto e acquistato un percorso tramite la nostra app, riceverai istruzioni su dove iniziare. Ogni giocatore avrà strumenti diversi sul proprio smartphone, come mappe, bussole o funzioni di messaggistica, per
              collaborare e risolvere gli enigmi lungo il percorso.
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="bg-bgChiaro p-6 rounded-lg shadow-lg mt-10">
            <h4 className="text-2xl font-bold mb-4 text-secondary">Quante persone possono partecipare?</h4>
            <p className="text-lg leading-relaxed">
              I nostri percorsi sono progettati per gruppi da 2 a 4 persone. Tuttavia, è possibile adattare l&apos;esperienza per gruppi più grandi, suddividendoli in squadre che possono competere tra loro.
            </p>
          </div>

          {/* FAQ 4 */}
          <div className="bg-bgChiaro p-6 rounded-lg shadow-lg mt-10">
            <h4 className="text-2xl font-bold mb-4 text-secondary">È necessario prenotare in anticipo?</h4>
            <p className="text-lg leading-relaxed">
              Sì, è consigliabile prenotare il percorso desiderato tramite la nostra app o il sito web per garantire disponibilità e ricevere tutte le informazioni necessarie prima dell&apos;inizio del gioco.
            </p>
          </div>

          {/* FAQ 5 */}
          <div className="bg-bgChiaro p-6 rounded-lg shadow-lg mt-10">
            <h4 className="text-2xl font-bold mb-4 text-secondary">Qual è la durata di ogni percorso?            </h4>
            <p className="text-lg leading-relaxed">
              Ogni percorso ha una durata variabile tra 1 / 2 ore, a seconda della complessità degli enigmi e del ritmo del gruppo.
            </p>
          </div>

          {/* FAQ 6 */}
          <div className="bg-bgChiaro p-6 rounded-lg shadow-lg mt-10">
            <h4 className="text-2xl font-bold mb-4 text-secondary">È adatto ai bambini?            </h4>
            <p className="text-lg leading-relaxed">
              I nostri percorsi sono pensati per adulti e ragazzi sopra i 12 anni. I bambini più piccoli possono partecipare accompagnati da adulti, ma alcuni enigmi potrebbero risultare complessi per loro.
            </p>
          </div>

          {/* FAQ 7 */}
          <div className="bg-bgChiaro p-6 rounded-lg shadow-lg mt-10">
            <h4 className="text-2xl font-bold mb-4 text-secondary">Cosa succede in caso di maltempo?            </h4>
            <p className="text-lg leading-relaxed">
              In caso di condizioni meteorologiche avverse, è possibile stoppare e riprendere il gioco successivamente. La sicurezza e il comfort dei nostri giocatori sono la nostra priorità
            </p>
          </div>

          {/* FAQ 8 */}
          <div className="bg-bgChiaro p-6 rounded-lg shadow-lg mt-10">
            <h4 className="text-2xl font-bold mb-4 text-secondary">È necessario avere una connessione internet durante il gioco?            </h4>
            <p className="text-lg leading-relaxed">
              Sì, è consigliabile avere una connessione internet stabile durante l&apos;intera esperienza per garantire il corretto funzionamento dell&apos;app e la ricezione degli indizi in tempo reale.
            </p>
          </div>

          {/* FAQ 9 */}
          <div className="bg-bgChiaro p-6 rounded-lg shadow-lg mt-10">
            <h4 className="text-2xl font-bold mb-4 text-secondary">Come posso contattare il supporto durante il gioco?            </h4>
            <p className="text-lg leading-relaxed">
              Se incontri difficoltà o hai bisogno di assistenza durante il percorso, puoi utilizzare la funzione di supporto integrata nell&apos;app o contattare il nostro team tramite i canali di contatto forniti sul sito
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
