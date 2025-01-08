import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Urban Enigma - Affronta le sfide più oscure e misteriose in città',
  description: 'Scopri Urban Enigma, un’avventura emozionante che combina enigmi e sfide urbane. Mettiti alla prova con le nostre esperienze interattive che ti guideranno attraverso la città in un viaggio misterioso. Unisciti a noi e risolvi gli enigmi più intriganti!',
  robots: 'index, follow',
  keywords: 'escape room, enigmi, sfide, mistero, avventura urbana, giochi interattivi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  )
}