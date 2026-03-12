import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ECU Protocol — Utility-token infrastructure on TON',
  description:
    'ECU Protocol is a utility-token infrastructure on TON. On-chain smart contracts, transparency, and verifiable operations.',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
