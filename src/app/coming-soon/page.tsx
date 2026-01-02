import { Footer } from '@/components/Footer'
import { HeroComingSoon } from '@/components/HeroComingSoon'
import { Navbar } from '@/components/Navbar'
import { WhatsNew } from '@/components/WhatsNew'
import { EmailCaptureSection, EmailCaptureCTA } from '@/components/EmailCaptureSection'
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

        {/* Email Capture Section - Only shown when enabled */}
        <EmailCaptureSection />

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
                    Nadi 2.0 will launch in January 2026. Stay tuned for updates
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
                    We are running a limited beta program. Contact us to be
                    considered for early access.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Final CTA - Only shown when email capture is enabled */}
        <EmailCaptureCTA />
      </main>
      <Footer />
    </>
  )
}
