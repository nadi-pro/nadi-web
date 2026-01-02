import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { Container } from '@/components/Container'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - Nadi',
  description:
    'Simple, transparent pricing for teams of all sizes. Start free, upgrade when you need more.',
}

const CheckIcon = () => (
  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
)

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Everything you need to get started. No credit card required.',
    features: [
      '3 projects',
      '10,000 errors per month',
      '14-day data retention',
      'Email notifications',
      'Full stack traces',
      'Team collaboration (2 members)',
      'Community support',
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$19',
    period: 'per month',
    description: 'For professional developers and growing teams.',
    features: [
      'Unlimited projects',
      '100,000 errors per month',
      '90-day data retention',
      'Slack, Discord & email notifications',
      'Full stack traces with context',
      'Team collaboration (10 members)',
      'Priority email support',
      'Performance monitoring',
    ],
    cta: 'Start Pro Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For large teams with advanced security needs.',
    features: [
      'Unlimited everything',
      'Unlimited errors',
      '1-year data retention',
      'Custom integrations',
      'Unlimited team members',
      'SSO & SAML',
      'Dedicated support',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

const faqs = [
  {
    question: 'Is the Free plan really free?',
    answer: 'Yes! The Free plan is free forever with no credit card required. You get 3 projects, 10,000 errors per month, and 14-day data retention.',
  },
  {
    question: 'Can I switch plans anytime?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.',
  },
  {
    question: 'What happens if I exceed my error limit?',
    answer: 'We will notify you when you reach 80% of your limit. If you exceed it, new errors will be queued until the next billing cycle or you upgrade.',
  },
  {
    question: 'Do you offer discounts for startups or open source?',
    answer: 'Yes! We offer 50% off for verified startups and free Pro plans for qualifying open source projects. Contact us to learn more.',
  },
  {
    question: 'Is there a free trial for Pro?',
    answer: 'Yes, Pro comes with a 14-day free trial. No credit card required to start.',
  },
]

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-white py-24 dark:bg-gray-950">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                Simple, transparent pricing
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
                Start free and upgrade as you grow. No hidden fees, no surprises.
              </p>
            </div>
          </Container>
        </section>

        {/* Pricing Cards */}
        <section className="bg-gray-50 py-24 dark:bg-gray-900">
          <Container>
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={`relative rounded-2xl border p-8 ${
                      tier.highlighted
                        ? 'border-blue-600 bg-white shadow-xl dark:border-blue-500 dark:bg-gray-950'
                        : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950'
                    }`}
                  >
                    {tier.highlighted && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="rounded-full bg-blue-600 px-4 py-1 text-sm font-medium text-white">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {tier.name}
                      </h3>
                      <div className="mt-4">
                        <span className="text-4xl font-bold text-gray-900 dark:text-white">
                          {tier.price}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400"> / {tier.period}</span>
                      </div>
                      <p className="mt-4 text-gray-600 dark:text-gray-400">{tier.description}</p>
                    </div>

                    <ul className="mt-8 space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckIcon />
                          <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`mt-8 w-full rounded-lg py-3 font-medium transition-colors ${
                        tier.highlighted
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'border border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800'
                      }`}
                    >
                      {tier.cta}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section className="bg-white py-24 dark:bg-gray-950">
          <Container>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                Frequently Asked Questions
              </h2>

              <div className="mt-12 space-y-8">
                {faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to get started?
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                Join developers who trust Nadi to monitor their PHP applications.
              </p>
              <div className="mt-8">
                <button className="rounded-lg bg-white px-8 py-3 font-medium text-blue-600 hover:bg-gray-100">
                  Start Free Today
                </button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
