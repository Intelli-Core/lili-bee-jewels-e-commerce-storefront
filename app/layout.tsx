import type { Metadata } from 'next'
import { Jost, Josefin_Sans } from 'next/font/google'
import './globals.css'

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
})

const josefin_sans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-josefin-sans',
})

export const metadata: Metadata = {
  title: 'Lili Bee Jewels',
  description: 'Premimum jewelry for the affordable prices',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jost.variable}>{children}</body>
    </html>
  )
}
