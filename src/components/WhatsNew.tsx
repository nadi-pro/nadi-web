import { Container } from './Container'

interface FeatureProps {
  icon: string
  title: string
  description: string
  code?: string
}

function Feature({ icon, title, description, code }: FeatureProps) {
  return (
    <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-blue-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-700">
      {/* Icon */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-3xl shadow-lg transition-transform group-hover:scale-110">
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
            Multi-tenant application monitoring built with Laravel 12, Go Collector,
            and PostgreSQL for complete data isolation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Feature
            icon="🏢"
            title="Multi-Tenant Architecture"
            description="Schema-per-project isolation with PostgreSQL. Each project gets dedicated storage for issues and telemetries."
            code="// Complete data isolation"
          />

          <Feature
            icon="⚡"
            title="Go Collector"
            description="High-performance collector built with Go, Fiber, and GORM. Handles authentication, rate limiting, and batch processing."
            code="POST /record // 1000 req/min"
          />

          <Feature
            icon="🔗"
            title="PHP SDK"
            description="Support for Laravel, Symfony, CodeIgniter, WordPress, and native PHP applications."
            code="composer require nadi-pro/nadi"
          />

          <Feature
            icon="📊"
            title="Issue Tracking"
            description="Track Exceptions, Queries, Queue Jobs, HTTP, Notifications, Scheduler, Commands, Gates, Logs, and Mail."
            code="Nadi::capture($exception)"
          />

          <Feature
            icon="👥"
            title="Organization Management"
            description="Multi-organization support with teams, projects, and applications. Role-based access control included."
            code="// org → team → project → app"
          />

          <Feature
            icon="📈"
            title="OpenTelemetry"
            description="Built-in observability with metrics, traces, and structured logging. Monitor request counts, duration, and more."
            code="// Traces & Metrics included"
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
                // Your app is now protected 🛡️
              </div>
              <div className="animate-pulse text-blue-600 dark:text-blue-400">█</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
