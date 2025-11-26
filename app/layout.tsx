import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Harvest',
  description: 'Private platform powered by Zama FHEVM',
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
