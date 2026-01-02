import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { Container } from '@/components/Container'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Features - Nadi',
  description:
    'Explore all the features that make Nadi the best error tracking solution for PHP developers.',
}

// Icons
const BellIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
  </svg>
)

const CodeIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
  </svg>
)

const ChartIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
)

const UsersIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
  </svg>
)

const ShieldIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
  </svg>
)

const BoltIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
  </svg>
)

const features = [
  {
    name: 'Real-time Error Tracking',
    description:
      'Catch errors the moment they happen. Get instant notifications so you can fix issues before your users even notice.',
    icon: BellIcon,
  },
  {
    name: 'Full Stack Traces',
    description:
      'See exactly what happened with complete stack traces, variable states, and the exact line of code that caused the issue.',
    icon: CodeIcon,
  },
  {
    name: 'Performance Monitoring',
    description:
      'Track slow queries, monitor response times, and identify bottlenecks that are slowing down your application.',
    icon: ChartIcon,
  },
  {
    name: 'Team Collaboration',
    description:
      'Invite your team, assign issues, leave comments, and track resolution progress all in one place.',
    icon: UsersIcon,
  },
  {
    name: 'Secure by Default',
    description:
      'Your data is encrypted and isolated. Each project has its own secure space with role-based access control.',
    icon: ShieldIcon,
  },
  {
    name: 'Easy Integration',
    description:
      'Get started in minutes with our PHP SDK. Works seamlessly with Laravel, Symfony, CodeIgniter, and WordPress.',
    icon: BoltIcon,
  },
]

const issueTypes = [
  'Exceptions & Errors',
  'Database Queries',
  'Queue Job Failures',
  'HTTP Request Errors',
  'Mail Failures',
  'Notification Issues',
  'Scheduled Task Failures',
  'CLI Command Errors',
  'Authorization Failures',
  'Log Entries',
]

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-white py-24 dark:bg-gray-950">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                Everything you need to
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  monitor your PHP apps
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
                From error tracking to performance monitoring, Nadi gives you complete visibility
                into your application&apos;s health.
              </p>
            </div>
          </Container>
        </section>

        {/* Features Grid */}
        <section className="bg-gray-50 py-24 dark:bg-gray-900">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                Powerful Features
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Built specifically for PHP developers who want to ship with confidence.
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-5xl">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-950"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
                      <feature.icon />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                      {feature.name}
                    </h3>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Issue Types */}
        <section className="bg-white py-24 dark:bg-gray-950">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                Track Every Type of Issue
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Nadi captures all types of issues in your PHP application, giving you complete visibility.
              </p>

              <div className="mt-12 flex flex-wrap justify-center gap-3">
                {issueTypes.map((type) => (
                  <span
                    key={type}
                    className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Frameworks */}
        <section className="bg-gray-50 py-24 dark:bg-gray-900">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                Works With Your Favorite Frameworks
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Seamless integration with the PHP frameworks you already use.
              </p>

              <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
                {['Laravel', 'Symfony', 'CodeIgniter', 'WordPress'].map((framework) => (
                  <div
                    key={framework}
                    className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                      <span className="text-2xl font-bold text-gray-600 dark:text-gray-400">
                        {framework[0]}
                      </span>
                    </div>
                    <span className="mt-4 font-medium text-gray-900 dark:text-white">{framework}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
