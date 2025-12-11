'use client'

import { useEffect, useState } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface CountdownTimerProps {
  targetDate: Date
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    setTimeLeft(calculateTimeLeft())

    return () => clearInterval(timer)
  }, [targetDate])

  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-4">
        <TimeUnit value={0} label="days" />
        <Separator />
        <TimeUnit value={0} label="hours" />
        <Separator />
        <TimeUnit value={0} label="minutes" />
        <Separator />
        <TimeUnit value={0} label="seconds" />
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center gap-4">
      <TimeUnit value={timeLeft.days} label="days" />
      <Separator />
      <TimeUnit value={timeLeft.hours} label="hours" />
      <Separator />
      <TimeUnit value={timeLeft.minutes} label="minutes" />
      <Separator />
      <TimeUnit value={timeLeft.seconds} label="seconds" />
    </div>
  )
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-2xl font-bold text-white shadow-lg sm:h-20 sm:w-20 sm:text-3xl md:h-24 md:w-24 md:text-4xl">
        {String(value).padStart(2, '0')}
      </div>
      <div className="mt-2 text-xs font-medium text-gray-600 dark:text-gray-400 sm:text-sm">
        {label}
      </div>
    </div>
  )
}

function Separator() {
  return (
    <div className="text-2xl font-bold text-gray-400 dark:text-gray-600 sm:text-3xl md:text-4xl">
      :
    </div>
  )
}
