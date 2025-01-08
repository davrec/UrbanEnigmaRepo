'use client';

export function AboutSection() {
  return (
    <div className="w-full pb-32 bg-bgScuro text-secondary">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between w-[80%] sm:w-[60%]">
        {/* Testo a sinistra */}
        <div className="sm:w-1/2 text-left px-4 sm:px-0">
          <h3 className="text-3xl sm:text-5xl font-bold mb-6">
            Sei pronto per la sfida?
          </h3>
          
          <p className="text-lg sm:text-xl mb-6 leading-relaxed">
            <strong>Scopri la città</strong> come non l&apos;hai mai vista.
            <br/> 
            Sei pronto a mettere alla prova la tua astuzia, resistenza e determinazione?
          </p>
          
          <p className="text-lg sm:text-xl mb-6 leading-relaxed">
            <strong>Urban Enigma</strong> è una vera e propria avventura che combina strategia, problem-solving ed esplorazione.
          </p>
          
          <p className="text-lg sm:text-xl mb-6 leading-relaxed">
            Le nostre sfide ti portano in un viaggio attraverso il mondo reale e digitale, mescolando elementi di 
            <strong> caccia al tesoro, escape room e geocaching</strong> in un&apos;esperienza indimenticabile.
          </p>
        </div>

        {/* Immagine a destra */}
        <div className="sm:w-1/2 mt-6 sm:mt-0">
          <img
            src="images/stickMan.webp"
            alt="urbanEnigmaStickMan"
          />
        </div>
      </div>
    </div>
  );
}
