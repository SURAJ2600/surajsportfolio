import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Suraj Sambath Kumar — Senior Android Engineer',
  description:
    'Senior Android Engineer with 10+ years building platform architecture, media systems, and performance infrastructure for apps used by millions.',
  authors: [{ name: 'Suraj Sambath Kumar' }],
  openGraph: {
    title: 'Suraj Sambath Kumar — Senior Android Engineer',
    description:
      'Platform architecture, media systems, and performance engineering for large-scale mobile apps.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  )
}
