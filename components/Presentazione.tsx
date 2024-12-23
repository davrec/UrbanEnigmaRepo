'use client';


export function Presentazione() {
  return (
    <div
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('images/pareteTagliata.jpeg')",
        height: "100vh", // Altezza pari all'intero schermo
      }}
    >
      {/* Overlay per scurire l'immagine */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      {/* Contenuto */}
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center h-full text-center pt-20">
        <h2 className="text-8xl font-extrabold mb-6 text-primary" style={{ fontFamily: "'Pirata One', serif" }}
        >Urban Escape Room</h2>
        <p className="text-5xl mb-8" style={{ fontFamily: "'Pirata One', serif" }}>
          Sei pronto ad affrontare il mistero?
        </p>

        {/* Button "Prenota ora" */}
        <div className="mb-4 mt-10">
          <a
            href="/book-now"
            className="inline-block text-4xl px-10 py-5 leading-none rounded bg-primary text-secondary hover:text-primary hover:bg-secondary transition duration-300"
            style={{ fontFamily: "'Pirata One', serif" }}
          >
            Prenota ora
          </a>
        </div>
        
        {/* Testo sotto il bottone */}
        <p className="text-4xl text-secondary" style={{ fontFamily: "'Pirata One', serif" }}>
          e vivi un&apos;esperienza unica!
        </p>
      </div>

      {/* Linea alla fine del div con spessore maggiore */}
      <div className="absolute bottom-0 w-full flex justify-center">
        <div className="w-[80%] h-1 bg-primary mx-auto mt-20"></div>
      </div>
    </div>
  );
}
