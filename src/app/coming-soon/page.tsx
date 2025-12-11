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
    'Nadi 2.0 is coming January 2025. The next generation of error tracking with 10x faster processing, AI-powered insights, and universal SDK support.',
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
                Get exclusive early access to Nadi 2.0 and be among the first to experience the
                future of error tracking.
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
                    Nadi 2.0 will launch in January 2025. Sign up to get notified of the exact
                    date and get early access.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    Will my current Nadi account work with v2.0?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Yes! We&apos;ll provide a seamless migration path for all existing Nadi users.
                    Your data, settings, and integrations will transfer smoothly.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    What&apos;s the pricing for Nadi 2.0?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We&apos;re introducing new pricing tiers designed to scale with your team.
                    Current users will get a special upgrade offer. Details coming soon!
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    Which languages and frameworks are supported?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Nadi 2.0 supports 15+ languages including JavaScript, TypeScript, Python, PHP,
                    Go, Ruby, Java, .NET, and more. Major frameworks like Next.js, Laravel,
                    Django, Rails, and Spring are fully supported.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    Can I try the beta?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We&apos;re running a limited beta program. Sign up with your email to be
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
                Join thousands of developers preparing for Nadi 2.0. The next generation of error
                tracking launches January 2025.
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
