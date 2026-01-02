'use client'

import { useState, useEffect } from 'react'
import { EmailCapture } from './EmailCapture'
import { Container } from './Container'
import { isNotifyMeAvailable } from '@/config/notify'

export function EmailCaptureSection() {
  const [isAvailable, setIsAvailable] = useState(false)

  useEffect(() => {
    setIsAvailable(isNotifyMeAvailable())
  }, [])

  if (!isAvailable) {
    return null
  }

  return (
    <section className="bg-white py-24 dark:bg-gray-950">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Be First in Line
          </h2>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
            Get exclusive early access to Nadi 2.0 and be among the first to experience
            multi-tenant application monitoring and issue tracking.
          </p>
          <EmailCapture variant="card" className="mx-auto max-w-md" />
        </div>
      </Container>
    </section>
  )
}

export function EmailCaptureCTA() {
  const [isAvailable, setIsAvailable] = useState(false)

  useEffect(() => {
    setIsAvailable(isNotifyMeAvailable())
  }, [])

  if (!isAvailable) {
    return null
  }

  return (
    <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Ready for the Future?
          </h2>
          <p className="mb-8 text-lg text-blue-100">
            Get notified when Nadi 2.0 launches. Multi-tenant application monitoring and
            issue tracking coming January 2026.
          </p>
          <div className="mx-auto max-w-md">
            <EmailCapture variant="inline" />
          </div>
        </div>
      </Container>
    </section>
  )
}
