import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ECU — Token Info (TON)',
  description: 'ECU is a utility settlement token on TON. On-chain references and public updates.',
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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

