export function PrimaryFeatures() {
  return (
    <section className="py-24 sm:py-32 bg-white dark:bg-gray-950" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
            // features
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Built for developers,
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              by developers
            </span>
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Every feature designed to make debugging faster, deployment safer,
            and development more enjoyable.
          </p>
        </div>

        {/* Main Feature with Terminal */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center mb-24">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                exception.handle() =&gt;{' '}
                <span className="text-blue-600 dark:text-blue-400">
                  insights
                </span>
              </h3>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Turn every crash into actionable intelligence. Our platform
                doesn&apos;t just catch bugs—it gives you the context to fix
                them fast.
              </p>

              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900 dark:text-white">
                    <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-lg bg-blue-600">
                      <span className="text-white text-xs">{'}'}</span>
                    </div>
                    realtime_dashboard()
                  </dt>
                  <dd className="inline">
                    Monitor all apps from a unified console. Live metrics,
                    customizable widgets, zero configuration needed.
                  </dd>
                </div>

                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900 dark:text-white">
                    <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-600">
                      <span className="text-white text-xs">!</span>
                    </div>
                    smart_alerts()
                  </dt>
                  <dd className="inline">
                    Intelligent notifications via Slack, Discord, or email. Only
                    the alerts that matter, when they matter.
                  </dd>
                </div>

                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900 dark:text-white">
                    <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-lg bg-purple-600">
                      <span className="text-white text-xs">AI</span>
                    </div>
                    ai_powered_insights()
                  </dt>
                  <dd className="inline">
                    ML-driven root cause analysis. Predict issues before they
                    happen. Automated solutions for common problems.
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[600px]">
              {/* Terminal demo */}
              <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-300 dark:border-gray-700 w-full">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-gray-200 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    nadi-dashboard.live
                  </div>
                  <div className="w-16" />
                </div>

                {/* Terminal Content */}
                <div className="p-6 text-sm bg-white dark:bg-black">
                  <div className="text-blue-600 dark:text-blue-400 mb-2">
                    ● Live Feed
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="text-red-600 dark:text-red-400">
                      ✗ TypeError: user.profile.avatar
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 ml-4">
                      auth/profile.js:42
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 ml-4">
                      affected: 1,247 users
                    </div>
                    <div className="text-yellow-600 dark:text-yellow-400 mt-2">
                      ▲ Auto-fix suggested
                    </div>
                    <div className="text-blue-600 dark:text-blue-400 mt-3">
                      ◆ Performance spike detected
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 ml-4">
                      api/users.php +2.3s
                    </div>
                    <div className="text-green-600 dark:text-green-400 mt-3">
                      ✓ Deploy completed
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 ml-4">
                      v2.1.0 → production
                    </div>
                    <div className="text-blue-600 dark:text-blue-400 animate-pulse mt-3">
                      █
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-8 ring-1 ring-gray-200 dark:ring-gray-800 transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
                <span className="text-white text-lg font-bold">{'{ }'}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                stack_trace.detailed()
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
                Get complete call stacks, variable states, and execution
                context. No more guessing what went wrong—see exactly what
                happened.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-8 ring-1 ring-gray-200 dark:ring-gray-800 transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600">
                <span className="text-white text-lg font-bold">@</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                team.notify()
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
                Slack, Discord, email, webhooks. Assign issues, track
                resolution, and keep everyone in the loop with smart
                notifications.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-8 ring-1 ring-gray-200 dark:ring-gray-800 transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600">
                <span className="text-white text-lg font-bold">⚡</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                realtime.detect()
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
                Sub-second error detection. Live performance metrics. Know about
                issues before your users complain about them.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-8 ring-1 ring-gray-200 dark:ring-gray-800 transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600">
                <span className="text-white text-lg font-bold">◆</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                metrics.analyze()
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
                Trends, patterns, performance insights. Custom dashboards for
                your specific KPIs. Data-driven decisions made easy.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-8 ring-1 ring-gray-200 dark:ring-gray-800 transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-teal-600">
                <span className="text-white text-lg font-bold">◇</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                sdk.install()
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
                One line of code, any framework. Laravel, Node.js, Python, PHP,
                React—we speak your language. Get started in under 60 seconds.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-8 ring-1 ring-gray-200 dark:ring-gray-800 transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-slate-500 to-slate-600">
                <span className="text-white text-lg font-bold">◉</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                security.enforce()
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
                SOC 2 compliant, encrypted at rest and in transit. Role-based
                access, audit trails. Your code stays yours, period.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
