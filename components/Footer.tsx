import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Company Info */}
          <div className="space-y-4 text-center md:text-left">
            {/* Logo */}
            <img
              src="/favicon.webp"
              alt="Urban Escape Room Logo"
              className="mx-auto md:mx-0 w-24 h-auto"
            />

            {/* Company Name */}
            <Link href="/" className="text-2xl font-bold inline-block">
              Urban Escape Room
            </Link>

            {/* Company Info */}
            <p className="text-sm text-white mt-4">
              Urban Escape Room Srl<br />
              P.IVA <br />
            </p>
          </div>

          {/* Navigation Menu */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <nav className="space-y-3">
              <Link href="/" className="block text-white hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/book" className="block text-white hover:text-white transition-colors">
                Tickets
              </Link>
              <Link href="/come-giocare" className="block text-white hover:text-white transition-colors">
                Come Giocare
              </Link>
              <Link href="/su-di-noi" className="block text-white hover:text-white transition-colors">
                Su Di Noi
              </Link>
              <Link href="/faq" className="block text-white hover:text-white transition-colors">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Contatti</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-2 text-white">
                <MapPin size={18} />
                <p>Via Napoli, Napoli</p>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-white">
                <Mail size={18} />
                <a href="mailto:info.urbanenigma@gmail.com" className="hover:text-white transition-colors">
                  info.urbanenigma@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-white">
                <Phone size={18} />
                <a href="tel:+39123456789" className="hover:text-white transition-colors">
                  +39
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Bar */}
      <div className="bg-[#1a1a1a] py-6">
        <div className="container mx-auto px-4 flex justify-center space-x-6">
          <p>Follow us:</p>
          <a href="https://facebook.com" className="text-white hover:text-white transition-colors" aria-label="Facebook">
            <Facebook size={24} />
          </a>
          <a href="https://instagram.com" className="text-white hover:text-white transition-colors" aria-label="Instagram">
            <Instagram size={24} />
          </a>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-primary py-4">
        <div className="container mx-auto px-4 text-center md:text-right">
          <p className="text-sm text-white">SNF Consulting</p>
        </div>
      </div>
    </footer>
  );
}
