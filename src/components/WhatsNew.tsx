import { Container } from './Container'

interface FeatureProps {
  icon: React.ReactNode
  title: string
  description: string
  code?: string
}

function Feature({ icon, title, description, code }: FeatureProps) {
  return (
    <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-blue-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-700">
      {/* Icon */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg transition-transform group-hover:scale-110">
        {icon}
      </div>

      {/* Content */}
      <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mb-4 text-gray-600 dark:text-gray-400">{description}</p>

      {/* Code Example */}
      {code && (
        <div className="mt-4 rounded-lg bg-gray-50 p-4 font-mono text-sm dark:bg-gray-950">
          <code className="text-blue-600 dark:text-blue-400">{code}</code>
        </div>
      )}
    </div>
  )
}

// Icons
const BellAlertIcon = () => (
  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
  </svg>
)

const MagnifyingGlassIcon = () => (
  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
)

const BoltIcon = () => (
  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
  </svg>
)

const ChartBarIcon = () => (
  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
)

const UsersIcon = () => (
  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
  </svg>
)

const ShieldCheckIcon = () => (
  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
  </svg>
)

export function WhatsNew() {
  return (
    <section className="bg-gray-50 py-24 dark:bg-gray-900">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            What&apos;s New in{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Nadi 2.0
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Everything you need to monitor your PHP applications.
            Simple setup, powerful features, peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Feature
            icon={<BellAlertIcon />}
            title="Instant Error Alerts"
            description="Get notified the moment something breaks. No more finding out from angry users or checking logs manually."
            code="// Error → Alert → Fix"
          />

          <Feature
            icon={<MagnifyingGlassIcon />}
            title="Full Stack Traces"
            description="See exactly what happened - the file, line number, and full context. Debug in minutes, not hours."
            code="// Line 42: undefined variable"
          />

          <Feature
            icon={<BoltIcon />}
            title="5-Minute Setup"
            description="Install the package, add your keys, done. Works with Laravel, Symfony, CodeIgniter, and WordPress."
            code="composer require nadi-pro/nadi"
          />

          <Feature
            icon={<ChartBarIcon />}
            title="Track Everything"
            description="Exceptions, slow queries, failed jobs, HTTP errors - all in one dashboard. Nothing slips through."
            code="// All issues in one place"
          />

          <Feature
            icon={<UsersIcon />}
            title="Team Friendly"
            description="Invite your team, assign bugs, leave comments. Everyone stays in the loop on what's broken and fixed."
            code="// Collaborate & resolve"
          />

          <Feature
            icon={<ShieldCheckIcon />}
            title="Your Data, Secured"
            description="Each project is completely isolated. Your error data stays private and secure, always."
            code="// Enterprise-grade security"
          />
        </div>

        {/* Terminal Demo */}
        <div className="mt-16">
          <h3 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
            Setup in Seconds
          </h3>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-gray-300 bg-gray-100 dark:border-gray-700 dark:bg-gray-900">
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-gray-300 bg-gray-200 px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">nadi-setup.sh</div>
              <div className="w-16" />
            </div>

            {/* Terminal Content */}
            <div className="space-y-3 bg-white p-6 font-mono text-sm dark:bg-black">
              <div className="text-blue-600 dark:text-blue-400">
                $ composer require nadi-pro/nadi:^2.0
              </div>
              <div className="text-green-600 dark:text-green-400">
                ✓ Package nadi-pro/nadi (2.0.0) installed
              </div>

              <div className="mt-4 text-blue-600 dark:text-blue-400">$ php artisan nadi:install</div>
              <div className="text-gray-600 dark:text-gray-400">Publishing configuration...</div>
              <div className="text-green-600 dark:text-green-400">✓ Configuration published</div>
              <div className="text-gray-600 dark:text-gray-400">
                Add to your .env file:
              </div>
              <div className="text-indigo-600 dark:text-indigo-400">
                NADI_APP_ID=your-app-id
              </div>
              <div className="text-indigo-600 dark:text-indigo-400">
                NADI_APP_SECRET=your-app-secret
              </div>

              <div className="mt-4 text-blue-600 dark:text-blue-400">$ php artisan serve</div>
              <div className="text-green-600 dark:text-green-400">✓ Connected to Nadi Collector</div>
              <div className="text-purple-600 dark:text-purple-400">
                ✓ Issue tracking enabled
              </div>
              <div className="text-indigo-600 dark:text-indigo-400">
                ✓ Telemetry collection active
              </div>
              <div className="mt-4 text-gray-500 dark:text-gray-400">
                // Your app is now protected
              </div>
              <div className="animate-pulse text-blue-600 dark:text-blue-400">█</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
