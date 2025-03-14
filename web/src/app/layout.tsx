import type { Metadata } from 'next'
import './globals.css'
 
export const metadata: Metadata = {
  title: 'Begriff Kaffee',
  description: 'Begriff Kaffee',
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