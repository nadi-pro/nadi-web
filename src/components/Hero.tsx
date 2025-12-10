import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen bg-white dark:bg-gray-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(99,102,241,0.3)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(99,102,241,0.2)_1px,transparent_0)] bg-[size:24px_24px] opacity-20" />

      {/* Animated Code Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-20 left-10 text-green-500/20 dark:text-green-400/20 text-xs md:text-sm animate-pulse">
          const nadi = require(&apos;nadi-js&apos;);
          <br />
          nadi.init({'{'}apiKey: process.env.API_KEY{'}'});
        </div>
        <div className="absolute top-40 right-20 text-blue-500/20 dark:text-blue-400/20 text-xs md:text-sm animate-pulse delay-1000">
          try {'{'}
          <br />
          &nbsp;&nbsp;// Your code here
          <br />
          {'}'} catch (error) {'{'}
          <br />
          &nbsp;&nbsp;nadi.report(error);
          <br />
          {'}'}
        </div>
        <div className="absolute bottom-40 left-20 text-purple-500/20 dark:text-purple-400/20 text-xs md:text-sm animate-pulse delay-2000">
          import {'{'} Nadi {'}'} from &apos;@nadi/core&apos;;
          <br />
          export default Nadi.configure({'{...}'});
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen items-center py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center w-full">
            {/* Left Column: Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-700/50 rounded-full px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 animate-fadeInUp">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
                <span>v2.0.0 // Production Ready</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="block text-gray-900 dark:text-white">
                    debug().
                  </span>
                  <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    ship().
                  </span>
                  <span className="block text-gray-900 dark:text-white">
                    repeat();
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                  Real-time crash reporting and performance monitoring for
                  developers who care about code quality.{' '}
                  <span className="text-blue-600 dark:text-blue-400">
                    // Because every exception tells a story
                  </span>
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="https://app.nadi.pro/register"
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-950 transition-all duration-200 transform hover:scale-105"
                >
                  start_coding()
                  <svg
                    className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
                <a
                  href="#demo"
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-gray-900 dark:text-white bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-950 transition-all duration-200"
                >
                  view_demo()
                  <svg
                    className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m2-5V9a2 2 0 00-2-2H5a2 2 0 00-2 2v9a2 2 0 002 2h10a2 2 0 002-2v-4"
                    />
                  </svg>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  // Trusted by developers worldwide
                </p>
                <div className="grid grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      50K+
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      developers
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      1M+
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      errors_caught
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      99.9%
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      uptime
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Terminal Demo */}
            <div className="relative">
              <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-300 dark:border-gray-700">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-gray-200 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    nadi-monitor.js
                  </div>
                  <div className="w-16" />
                </div>

                {/* Terminal Content */}
                <div className="p-6 text-sm space-y-3 bg-white dark:bg-black">
                  <div className="text-blue-600 dark:text-blue-400">
                    $ npm install nadi-js
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">
                    ✓ Installing crash monitoring...
                  </div>
                  <div className="text-indigo-600 dark:text-indigo-400 mt-4">
                    const nadi = require(&apos;nadi-js&apos;);
                  </div>
                  <div className="text-indigo-600 dark:text-indigo-400">
                    nadi.init({'{'}
                  </div>
                  <div className="text-indigo-600 dark:text-indigo-400 ml-4">
                    apiKey: process.env.NADI_API_KEY,
                  </div>
                  <div className="text-indigo-600 dark:text-indigo-400 ml-4">
                    environment: &apos;production&apos;
                  </div>
                  <div className="text-indigo-600 dark:text-indigo-400">
                    {'}'});
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 mt-4">
                    // Your app is now protected! 🛡️
                  </div>
                  <div className="text-red-600 dark:text-red-400 mt-4">
                    ❌ TypeError: Cannot read property &apos;name&apos;
                  </div>
                  <div className="text-yellow-600 dark:text-yellow-400">
                    ⚡ Captured & reported to dashboard
                  </div>
                  <div className="text-green-600 dark:text-green-400">
                    ✅ Team notified via Slack
                  </div>
                  <div className="text-blue-600 dark:text-blue-400 animate-pulse">
                    █
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-bounce">
                LIVE
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                0ms latency
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
