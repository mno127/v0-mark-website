import type { Metadata } from 'next'
import { Sora, Inter, Fira_Code } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _sora = Sora({ subsets: ['latin'], weight: ['800'], variable: '--font-display' })
const _inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const _firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Mark Nicholson — Builder. Telecom veteran. Founder of theCy and reBe.',
  description: 'After working with telecom providers globally on 2G through 5G, I retired mid-life and thought about what the 6G world would look like. Then I built it.',
  themeColor: '#00e5ff',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${_sora.variable} ${_inter.variable} ${_firaCode.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
