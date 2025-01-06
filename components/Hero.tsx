'use client';

export function Hero() {
  return (
    <div
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('images/pareteTagliata.jpeg')",
        height: "100vh", // Altezza pari all'intero schermo
      }}
    >
      {/* Overlay per scurire l'immagine  */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      {/* Contenuto */}
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center h-full text-center pt-20 px-4 sm:px-0">
        {/* Titolo */}
        <h2
          className="text-5xl sm:text-8xl font-extrabold mb-10 text-primary"
        >
          Urban
          <br/>
          Enigma
        </h2>
        <p
          className="text-2xl sm:text-5xl mb-10"
        >
          Sei pronto ad affrontare il mistero?
        </p>

        {/* Button "Prenota ora" */}
        <div className="mb-4 mt-5">
          <a
            href="/book-now"
            className="inline-block text-2xl sm:text-4xl px-6 sm:px-10 py-3 sm:py-5 leading-none rounded bg-primary text-secondary hover:text-primary hover:bg-secondary transition duration-300"
          >
            Prenota ora
          </a>
        </div>
      </div>

      {/* Linea alla fine del div con spessore maggiore */}
      <div className="absolute bottom-0 w-full flex justify-center">
        <div className="w-[80%] h-1 bg-primary mx-auto mt-20"></div>
      </div>
    </div>
  );
}
