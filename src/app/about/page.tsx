import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { Container } from '@/components/Container'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Nadi',
  description:
    'Learn about Nadi, the error tracking solution built by PHP developers, for PHP developers.',
}

const values = [
  {
    title: 'Developer First',
    description:
      'We build tools that we want to use ourselves. Every feature is designed with developers in mind.',
  },
  {
    title: 'Simple & Focused',
    description:
      'No bloated features. Just the essential tools you need to catch and fix errors quickly.',
  },
  {
    title: 'Privacy Matters',
    description:
      'Your data belongs to you. We never sell or share your information with third parties.',
  },
  {
    title: 'Always Improving',
    description:
      'We listen to our users and continuously improve Nadi based on real feedback.',
  },
]

const stats = [
  { label: 'Errors Tracked', value: '10M+' },
  { label: 'Happy Developers', value: '2,000+' },
  { label: 'Uptime', value: '99.9%' },
  { label: 'Avg Response Time', value: '<100ms' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-white py-24 dark:bg-gray-950">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                Built by PHP developers,
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  for PHP developers
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
                We understand the frustration of hunting for bugs in production.
                That&apos;s why we built Nadi - to make error tracking simple and effective.
              </p>
            </div>
          </Container>
        </section>

        {/* Story */}
        <section className="bg-gray-50 py-24 dark:bg-gray-900">
          <Container>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                Our Story
              </h2>
              <div className="mt-8 space-y-6 text-lg text-gray-600 dark:text-gray-400">
                <p>
                  Nadi started from a simple frustration: existing error tracking tools were either
                  too expensive, too complicated, or not built for PHP developers.
                </p>
                <p>
                  We wanted something that just works - install it, configure it with two environment
                  variables, and start catching errors. No complex setup, no overwhelming dashboards,
                  no enterprise sales calls just to get started.
                </p>
                <p>
                  Today, Nadi helps thousands of developers sleep better at night, knowing that
                  if something breaks, they&apos;ll be the first to know - not their users.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Stats */}
        <section className="bg-white py-24 dark:bg-gray-950">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Values */}
        <section className="bg-gray-50 py-24 dark:bg-gray-900">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                What We Believe In
              </h2>
            </div>

            <div className="mx-auto mt-16 max-w-5xl">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-950"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {value.title}
                    </h3>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Contact */}
        <section className="bg-white py-24 dark:bg-gray-950">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                Get in Touch
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Have questions? We&apos;d love to hear from you.
              </p>

              <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Support</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    For technical help and questions
                  </p>
                  <a
                    href="mailto:support@nadi.pro"
                    className="mt-4 inline-block text-blue-600 hover:underline dark:text-blue-400"
                  >
                    support@nadi.pro
                  </a>
                </div>

                <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Sales</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    For enterprise and custom plans
                  </p>
                  <a
                    href="mailto:sales@nadi.pro"
                    className="mt-4 inline-block text-blue-600 hover:underline dark:text-blue-400"
                  >
                    sales@nadi.pro
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
