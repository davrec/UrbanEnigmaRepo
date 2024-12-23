import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Escape Room Misteriosa',
  description: 'Affronta le sfide più oscure e misteriose nella nostra Escape Room',
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