'use client'

import { useState } from 'react'

interface EmailCaptureProps {
  variant?: 'inline' | 'card'
  className?: string
}

export function EmailCapture({ variant = 'inline', className = '' }: EmailCaptureProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // TODO: Replace with your actual API endpoint
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Example API call:
      // const response = await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // })

      setStatus('success')
      setMessage('Thanks! We\'ll notify you when Nadi 2.0 launches.')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setMessage('Oops! Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className={`rounded-lg bg-green-50 p-4 dark:bg-green-900/20 ${className}`}>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white">
            ✓
          </div>
          <div>
            <p className="font-medium text-green-900 dark:text-green-100">{message}</p>
            <p className="text-sm text-green-700 dark:text-green-300">
              // Check your inbox for confirmation
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'card') {
    return (
      <div className={`rounded-2xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-800 dark:bg-gray-900 ${className}`}>
        <div className="mb-6 text-center">
          <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
            Get Notified at Launch
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            // Be the first to know when Nadi 2.0 goes live
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              disabled={status === 'loading'}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-medium text-white transition-all hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-offset-gray-900"
          >
            {status === 'loading' ? 'notify_me()...' : 'notify_me()'}
          </button>

          {status === 'error' && (
            <p className="text-sm text-red-600 dark:text-red-400">{message}</p>
          )}

          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Join 2,000+ developers waiting for v2.0
          </p>
        </form>
      </div>
    )
  }

  // Inline variant
  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        disabled={status === 'loading'}
        className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="whitespace-nowrap rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-medium text-white transition-all hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-offset-gray-950"
      >
        {status === 'loading' ? 'notify_me()...' : 'notify_me()'}
      </button>
    </form>
  )
}
