/**
 * Notify Me Feature Configuration
 *
 * Configure via environment variables:
 * NEXT_PUBLIC_NOTIFY_ME_ENABLED=true
 * NEXT_PUBLIC_NOTIFY_ME_API_URL=https://app.nadi.pro/api/subscribers
 */

export const NOTIFY_ME_ENABLED =
  process.env.NEXT_PUBLIC_NOTIFY_ME_ENABLED === 'true'

export const NOTIFY_ME_API_URL =
  process.env.NEXT_PUBLIC_NOTIFY_ME_API_URL || ''

/**
 * Check if notify me feature is available
 * Returns true only if enabled AND API URL is configured
 */
export function isNotifyMeAvailable(): boolean {
  return NOTIFY_ME_ENABLED && NOTIFY_ME_API_URL.length > 0
}

/**
 * Subscribe email to notification list
 */
export async function subscribeEmail(
  email: string
): Promise<{ success: boolean; message: string }> {
  if (!isNotifyMeAvailable()) {
    return {
      success: false,
      message: 'Notification feature is not configured',
    }
  }

  try {
    const response = await fetch(NOTIFY_ME_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ email }),
    })

    const data = await response.json()

    if (!response.ok) {
      return {
        success: false,
        message: data.message || 'Failed to subscribe',
      }
    }

    return {
      success: true,
      message: data.message || "Thanks! We'll notify you when Nadi 2.0 launches.",
    }
  } catch (error) {
    return {
      success: false,
      message: 'Network error. Please try again.',
    }
  }
}
