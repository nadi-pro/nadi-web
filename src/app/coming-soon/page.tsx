import { Footer } from '@/components/Footer'
import { HeroComingSoon } from '@/components/HeroComingSoon'
import { Navbar } from '@/components/Navbar'
import { WhatsNew } from '@/components/WhatsNew'
import { EmailCapture } from '@/components/EmailCapture'
import { Container } from '@/components/Container'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coming Soon - Nadi 2.0',
  description:
    'Nadi 2.0 is coming January 2026. Multi-tenant application monitoring and issue tracking with real-time error tracking, telemetry collection, and application health monitoring.',
}

export default function ComingSoonPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero with Countdown */}
        <HeroComingSoon />

        {/* What's New in 2.0 */}
        <WhatsNew />

        {/* Email Capture Section */}
        <section className="bg-white py-24 dark:bg-gray-950">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                Be First in Line
              </h2>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
                Get exclusive early access to Nadi 2.0 and be among the first to experience
                multi-tenant application monitoring and issue tracking.
              </p>
              <EmailCapture variant="card" className="mx-auto max-w-md" />
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-24 dark:bg-gray-900">
          <Container>
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                Frequently Asked Questions
              </h2>

              <div className="space-y-8">
                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    When exactly will Nadi 2.0 launch?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Nadi 2.0 will launch in January 2026. Sign up with your email to receive notifications
                    about the exact date and early access.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    What is multi-tenant isolation?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Nadi uses schema-per-project isolation. Each project gets its own PostgreSQL schema
                    for storing issues and telemetries, ensuring complete data isolation between projects.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    Which PHP frameworks are supported?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Nadi 2.0 supports Laravel, Symfony, CodeIgniter, WordPress, and native PHP applications.
                    Complete monitoring for all your popular PHP frameworks.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    What types of issues can Nadi track?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Nadi tracks Exceptions, Database Queries, Queue Jobs, HTTP Requests, Notifications,
                    Scheduled Tasks, CLI Commands, Authorization Gates, Logs, and Mail failures.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    How does the Go Collector work?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    The Go Collector is a high-performance service built with Fiber and GORM. It handles
                    authentication, rate limiting, batch processing, and multi-tenant routing with OpenTelemetry integration.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    Can I try the beta version?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We are running a limited beta program. Sign up with your email to be
                    considered for early access.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                Ready for the Future?
              </h2>
              <p className="mb-8 text-lg text-blue-100">
                Join developers preparing for Nadi 2.0. Multi-tenant application monitoring and
                issue tracking launches January 2026.
              </p>
              <div className="mx-auto max-w-md">
                <EmailCapture variant="inline" />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
