import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextJS Dashboard',
  description: 'Dashboard application created with NextJS and schadcn/ui'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
          {children}
        </main>
      </body>
    </html>
  )
}
