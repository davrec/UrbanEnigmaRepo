'use client';

export function HeroBook() {
  return (
    <div
      className="relative bg-cover bg-center text-secondary"
      style={{
        backgroundImage: "url('images/pareteTagliata.webp')",
        height: "40vh",
      }}
    >
      {/* Overlay per scurire l'immagine  */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      {/* Contenuto */}
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center h-full text-center pt-20 px-4 sm:px-0">
        {/* Titolo */}
        <h2
          className="text-5xl sm:text-7xl font-bold mb-10 text-primary"
        >
          Tickets
        </h2>

      </div>

      {/* Linea alla fine del div con spessore maggiore */}
      <div className="absolute bottom-0 w-full flex justify-center">
        <div className="w-[80%] h-1 bg-primary mx-auto mt-20"></div>
      </div>
    </div>
  );
}
