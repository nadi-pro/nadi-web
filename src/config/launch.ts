/**
 * Launch Configuration for Nadi 2.0
 *
 * The launch date can be configured via environment variable:
 * NEXT_PUBLIC_LAUNCH_DATE=2026-01-15T00:00:00
 *
 * If not provided, defaults to end of January 2026.
 *
 * This date is used across the application for:
 * - Countdown timer
 * - Automatic redirects (middleware)
 * - Feature flags
 */

// Get launch date from environment variable or use default
const launchDateString =
  process.env.NEXT_PUBLIC_LAUNCH_DATE || '2026-01-31T23:59:59'

export const LAUNCH_DATE = new Date(launchDateString)

/**
 * Check if we're currently before the launch date
 */
export function isBeforeLaunch(): boolean {
  return new Date() < LAUNCH_DATE
}

/**
 * Check if launch date has passed
 */
export function isLaunched(): boolean {
  return new Date() >= LAUNCH_DATE
}

/**
 * Get time remaining until launch
 */
export function getTimeUntilLaunch() {
  const now = new Date()
  const difference = LAUNCH_DATE.getTime() - now.getTime()

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}
