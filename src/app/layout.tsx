import { type Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/styles/tailwind.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: {
    template: '%s - Nadi',
    default: 'Nadi - Application Monitoring & Error Tracking for Developers',
  },
  description:
    'Real-time error tracking and application monitoring for modern development teams. Track issues across PHP, Laravel, Node.js, Python, Go, and more. Start shipping with confidence.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={`${inter.variable} font-mono antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
