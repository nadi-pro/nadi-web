'use client'

import { useState } from 'react'
import Link from 'next/link'
import { DarkModeToggle } from './DarkModeToggle'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200/20 dark:border-gray-800/20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                {/* Terminal-like icon */}
                <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  nadi
                </span>
                <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                  // crash.care.companion
                </span>
              </div>
            </Link>

            {/* Navigation Links (hidden on mobile) */}
            <div className="hidden lg:flex lg:space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium transition-colors duration-200"
              >
                .features()
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium transition-colors duration-200"
              >
                .pricing()
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium transition-colors duration-200"
              >
                .about()
              </a>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <DarkModeToggle />

            {/* Auth Buttons */}
            <div className="hidden sm:flex sm:items-center sm:space-x-3">
              <Link
                href="https://app.nadi.pro/login"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium transition-colors duration-200"
              >
                login()
              </Link>
              <Link
                href="https://app.nadi.pro/register"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-950 transition-all duration-200 transform hover:scale-105"
              >
                start()
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-gray-800 animate-slideDown">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
              >
                .features()
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
              >
                .pricing()
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
              >
                .about()
              </a>
              <div className="border-t border-gray-200 dark:border-gray-800 pt-3 mt-3">
                <Link
                  href="https://app.nadi.pro/login"
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                >
                  login()
                </Link>
                <Link
                  href="https://app.nadi.pro/register"
                  className="block px-3 py-2 mt-2 text-center text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg transition-all duration-200"
                >
                  start()
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
