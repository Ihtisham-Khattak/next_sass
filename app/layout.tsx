import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { clerkClient } from '@clerk/nextjs'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nova',
  description: 'NOVA FORGE Theme',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <clerkClient>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </clerkClient>
  )
}
