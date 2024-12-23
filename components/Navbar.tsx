'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 text-gray-200 p-4 transition duration-300 ${
        isScrolled ? 'bg-black bg-opacity-80' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between lg:w-3/5 md:w-full">
        {/* Logo tutto a sinistra */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <div className="w-20 h-20 bg-primary rounded-full flex justify-center items-center">
            <img src="/favicon.png" alt="Logo" className="w-12 h-12" />
          </div>
        </Link>

        {/* Elementi a destra */}
        <div className="flex items-center space-x-8">
          {/* Selettore lingua */}
          <Link
            href="/en"
            className="text-white flex items-center space-x-2 hover:text-gray-300 transition duration-300"
          >
            <div className="w-8 h-8 flex items-center">
            <svg viewBox="0 0 60 34" xmlns="http://www.w3.org/2000/svg">
                <path d="m0 2q15-4 30 0t30 0v30q-15 4-30 0t-30 0z" fill="#00247d"/>
                <path d="m0 2q3.3541-0.89443 6.7082-1.3888 11.646 4.1062 23.292 13.035 11.646-2.7174 23.292-10.257 3.3541-0.49443 6.7082-1.3888v3.3541q-11.646 8.9285-23.292 13.035 11.646 7.5397 23.292 10.257v3.3541q-3.3541 0.89443-6.7082 1.3888-11.646-4.1062-23.292-13.035-11.646 2.7174-23.292 10.257-3.3541 0.49443-6.7082 1.3888v-3.3541q11.646-8.9285 23.292-13.035-11.646-7.5397-23.292-10.257z" fill="#fff"/>
                <path d="m0 2q15 3.5 30 15-2.2361-0.59628-4.4721-1.0148-12.764-8.7709-25.528-11.749zm30 12.764q12.764-2.9782 25.528-11.749 2.2361-0.41851 4.4721-1.0148-15 11.5-30 15zm30 17.236q-15-3.5-30-15 2.2361 0.59628 4.4721 1.0148 12.764 8.7709 25.528 11.749zm-30-12.764q-12.764 2.9782-25.528 11.749-2.2361 0.41851-4.4721 1.0148 15-11.5 30-15z" fill="#cf142b"/>
                <path d="m25 0.88889q2.5 0.44444 5 1.1111t5 1.1111v10q12.5 2.2222 25-1.1111v10q-12.5 3.3333-25 1.1111v10q-2.5-0.44444-5-1.1111t-5-1.1111v-10q-12.5-2.2222-25 1.1111v-10q12.5-3.3333 25-1.1111z" fill="#fff"/>
                <path d="m27,1.28q1.5.32 3,.72t3,.72v12q13.5,2.88 27-.72v6q-13.5,3.6-27,.72v12q-1.5-.32-3-.72t-3-.72v-12q-13.5-2.88-27,.72v-6q13.5-3.6 27-.72z" fill="#cf142b"/>
            </svg>
            </div>
            <span className="text-lg">EN</span>
          </Link>

          {/* Bottone Prenota Ora }
          <Link
            href="/book-now"
            className="inline-block text-sm px-6 py-3 leading-none rounded bg-primary hover:bg-secondary text-white hover:text-primary transition duration-300"
          >
            Prenota Ora
          </Link> */}

          {/* Menu desktop */}
          <div className="hidden lg:flex lg:space-x-12">
            <Link
              href="/games-and-tickets"
              className="flex items-center text-white hover:text-gray-300 transition duration-300"
            >
              Games & Ticket
            </Link>
            <Link
              href="/how-to-play"
              className="flex items-center text-white hover:text-gray-300 transition duration-300"
            >
              Come Giocare
            </Link>
            <Link
              href="/about-us"
              className="flex items-center text-white hover:text-gray-300 transition duration-300"
            >
              Su Di Noi
            </Link>
            <Link
              href="/faq"
              className="flex items-center text-white hover:text-gray-300 transition duration-300"
            >
              FAQ
            </Link>
            <Link
              href="/login"
              className="inline-block text-sm px-6 py-3 leading-none rounded bg-primary hover:bg-secondary text-white hover:text-primary transition duration-300"
            >
              Login
            </Link>
          </div>

          {/* Hamburger button per mobile */}
          <button
            className="lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-200 hover:text-gray-400 transition duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black bg-opacity-90 p-6 absolute top-full left-0 w-full">
          <div className="flex flex-col space-y-4">
            <Link
              href="/games-and-tickets"
              className="text-white hover:text-gray-300 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Games & Ticket
            </Link>
            <Link
              href="/how-to-play"
              className="text-white hover:text-gray-300 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Come Giocare
            </Link>
            <Link
              href="/about-us"
              className="text-white hover:text-gray-300 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Su Di Noi
            </Link>
            <Link
              href="/faq"
              className="text-white hover:text-gray-300 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/login"
              className="inline-block text-sm px-6 py-3 leading-none rounded bg-primary hover:bg-secondary text-white hover:text-primary transition duration-300 self-start"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
