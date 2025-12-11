'use client'

import { useEffect, useState } from 'react'
import { isBeforeLaunch } from '@/config/launch'

interface LaunchGateProps {
  /** Content to show before launch */
  beforeLaunch?: React.ReactNode
  /** Content to show after launch */
  afterLaunch?: React.ReactNode
  /** Children (same as afterLaunch if not specified) */
  children?: React.ReactNode
}

/**
 * Conditionally render content based on launch status
 *
 * @example
 * ```tsx
 * <LaunchGate
 *   beforeLaunch={<ComingSoonBanner />}
 *   afterLaunch={<WelcomeBanner />}
 * />
 * ```
 */
export function LaunchGate({ beforeLaunch, afterLaunch, children }: LaunchGateProps) {
  const [mounted, setMounted] = useState(false)
  const [beforeLaunchState, setBeforeLaunchState] = useState(true)

  useEffect(() => {
    setMounted(true)
    setBeforeLaunchState(isBeforeLaunch())

    // Check every minute if launch date has passed
    const interval = setInterval(() => {
      setBeforeLaunchState(isBeforeLaunch())
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  // Prevent hydration mismatch
  if (!mounted) {
    return null
  }

  if (beforeLaunchState) {
    return <>{beforeLaunch}</>
  }

  return <>{afterLaunch || children}</>
}
