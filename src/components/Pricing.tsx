import Link from 'next/link'

export function Pricing() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900 relative" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            pricing.deploy()
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            // Simple, transparent pricing. No hidden fees, no mysterious
            charges.
          </p>
        </div>

        {/* Floating Code Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
          <div className="absolute top-10 left-10 text-xs text-blue-500/30 dark:text-blue-400/30 animate-float">
            const price = 9;
          </div>
          <div className="absolute top-32 right-16 text-xs text-indigo-500/30 animate-float-delayed">
            if (startup) free_trial();
          </div>
        </div>

        {/* Pricing Card */}
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl bg-white dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none backdrop-blur-sm">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              app.monitor() =&gt; $9
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">
              /* Perfect for teams of all sizes. Monitor your applications with
              complete transparency and no surprises. */
            </p>

            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600 dark:text-blue-400">
                features.include(&apos;everything&apos;)
              </h4>
              <div className="h-px flex-auto bg-gray-100 dark:bg-gray-700" />
            </div>

            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 dark:text-gray-300 sm:grid-cols-2 sm:gap-6"
            >
              <li className="flex gap-x-3">
                <span className="h-6 w-5 flex-none text-blue-600 dark:text-blue-400 font-bold">
                  ✓
                </span>
                monitor.app(&apos;full_coverage&apos;)
              </li>
              <li className="flex gap-x-3">
                <span className="h-6 w-5 flex-none text-blue-600 dark:text-blue-400 font-bold">
                  ✓
                </span>
                team.add(&apos;unlimited&apos;)
              </li>
              <li className="flex gap-x-3">
                <span className="h-6 w-5 flex-none text-blue-600 dark:text-blue-400 font-bold">
                  ✓
                </span>
                issues.limit(1000) // per app/month
              </li>
              <li className="flex gap-x-3">
                <span className="h-6 w-5 flex-none text-blue-600 dark:text-blue-400 font-bold">
                  ✓
                </span>
                alerts.realtime(true)
              </li>
              <li className="flex gap-x-3">
                <span className="h-6 w-5 flex-none text-blue-600 dark:text-blue-400 font-bold">
                  ✓
                </span>
                dashboard.analytics(&apos;advanced&apos;)
              </li>
              <li className="flex gap-x-3">
                <span className="h-6 w-5 flex-none text-blue-600 dark:text-blue-400 font-bold">
                  ✓
                </span>
                api.access() && integrations()
              </li>
              <li className="flex gap-x-3">
                <span className="h-6 w-5 flex-none text-blue-600 dark:text-blue-400 font-bold">
                  ✓
                </span>
                support.email(&apos;24/7&apos;)
              </li>
              <li className="flex gap-x-3">
                <span className="h-6 w-5 flex-none text-blue-600 dark:text-blue-400 font-bold">
                  ✓
                </span>
                uptime.sla(&apos;99.9%&apos;)
              </li>
            </ul>
          </div>

          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-10 text-center ring-1 ring-inset ring-gray-900/5 dark:ring-gray-100/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600 dark:text-gray-400">
                  // Starting at
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                    $9
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600 dark:text-gray-400">
                    USD
                  </span>
                </p>
                <p className="mt-2 text-xs leading-5 text-gray-600 dark:text-gray-400">
                  per app.deploy(), per month
                </p>

                <Link
                  href="https://app.nadi.pro/register"
                  className="mt-10 block w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-3 py-3 text-center text-sm font-semibold text-white hover:from-blue-500 hover:to-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 transform hover:scale-105"
                >
                  trial.start_free()
                </Link>

                <p className="mt-6 text-xs leading-5 text-gray-600 dark:text-gray-400">
                  // 30-day trial. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ or Additional Info */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            need.more_apps() ?
          </h3>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
            // Each additional app is just $9/month. Scale as your business
            grows.
          </p>
          <div className="mt-6 flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center">
              <span className="w-4 h-4 text-green-500 mr-2 font-bold">✓</span>
              <span className="text-gray-600 dark:text-gray-300">
                cancel.anytime()
              </span>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 text-green-500 mr-2 font-bold">✓</span>
              <span className="text-gray-600 dark:text-gray-300">
                fees.setup = null
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
