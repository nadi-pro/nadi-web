'use client'

import { CountdownTimer } from './CountdownTimer'
import { EmailCapture } from './EmailCapture'
import { LAUNCH_DATE } from '@/config/launch'
import { isNotifyMeAvailable } from '@/config/notify'
import { useState, useEffect } from 'react'

export function HeroComingSoon() {
  // Launch date is centralized in src/config/launch.ts
  const launchDate = LAUNCH_DATE
  const [showEmailCapture, setShowEmailCapture] = useState(false)

  useEffect(() => {
    setShowEmailCapture(isNotifyMeAvailable())
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-white dark:bg-gray-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(99,102,241,0.3)_1px,transparent_0)] bg-[size:24px_24px] opacity-20 dark:bg-[radial-gradient(circle_at_1px_1px,rgba(99,102,241,0.2)_1px,transparent_0)]" />

      {/* Animated Code Background */}
      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
        <div className="absolute left-10 top-20 animate-pulse text-xs text-green-500/20 dark:text-green-400/20 md:text-sm">
          // Nadi 2.0
          <br />
          $performance = &apos;10x faster&apos;;
          <br />
          $monitoring = &apos;enabled&apos;;
        </div>
        <div className="delay-1000 absolute right-20 top-40 animate-pulse text-xs text-blue-500/20 dark:text-blue-400/20 md:text-sm">
          // Coming January 2026
          <br />
          use NadiPro\Nadi;
          <br />
          // Revolutionary monitoring
        </div>
        <div className="delay-2000 absolute bottom-40 left-20 animate-pulse text-xs text-purple-500/20 dark:text-purple-400/20 md:text-sm">
          Nadi::capture($exception);
          <br />
          // Universal. Powerful. Smart.
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen items-center py-16 md:py-20">
          <div className="w-full space-y-12 text-center">
            {/* Badge */}
            <div className="animate-fadeInUp inline-flex items-center space-x-2 rounded-full border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 text-sm font-medium text-blue-700 dark:border-blue-700/50 dark:from-blue-900/20 dark:to-indigo-900/20 dark:text-blue-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </span>
              <span>v2.0.0 // Coming January 2026</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
                <span className="block text-gray-900 dark:text-white">Nadi::</span>
                <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  version(2.0)
                </span>
                <span className="block text-gray-900 dark:text-white">
                  // January 2026
                </span>
              </h1>
              <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg md:text-xl">
                Stop hunting for bugs in production.{' '}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Catch errors instantly
                </span>
                ,{' '}
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  debug faster
                </span>
                , and{' '}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                  ship with confidence
                </span>
                .
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                // Launching in
              </p>
              <CountdownTimer targetDate={launchDate} />
            </div>

            {/* Email Capture - Only shown when enabled */}
            {showEmailCapture && (
              <div className="mx-auto max-w-xl">
                <EmailCapture variant="inline" />
                <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                  // Get notified when Nadi 2.0 launches
                </p>
              </div>
            )}

            {/* Trust Indicators */}
            <div className="pt-12">
              <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
                <div className="rounded-xl border border-gray-200 bg-white/50 p-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/50">
                  <div className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                    5 min
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    setup time
                  </div>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white/50 p-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/50">
                  <div className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                    Real-time
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    error alerts
                  </div>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white/50 p-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/50">
                  <div className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                    100%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    PHP focused
                  </div>
                </div>
              </div>
            </div>

            {/* What's Different */}
            <div className="mx-auto max-w-2xl rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50 p-8 dark:border-blue-800/50 dark:from-blue-900/20 dark:to-purple-900/20">
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                Why developers love Nadi
              </h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Know about bugs before your users complain
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Setup in under 5 minutes with Laravel, Symfony & more
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    See exactly what went wrong with full stack traces
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Sleep better knowing your app is being monitored 24/7
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
