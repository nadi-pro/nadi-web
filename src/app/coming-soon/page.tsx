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
                    Bila tarikh sebenar Nadi 2.0 akan dilancarkan?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Nadi 2.0 akan dilancarkan pada Januari 2026. Daftar email anda untuk mendapat notifikasi
                    tarikh sebenar dan akses awal.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    Adakah akaun Nadi saya sekarang boleh digunakan dengan v2.0?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Ya! Kami akan sediakan proses migrasi yang mudah untuk semua pengguna Nadi.
                    Data, settings, dan integrations anda akan dipindahkan dengan lancar.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    Berapakah harga untuk Nadi 2.0?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Kami memperkenalkan pelan harga baharu yang direka untuk berkembang dengan team anda.
                    Pengguna semasa akan mendapat tawaran upgrade istimewa. Butiran akan diumumkan tidak lama lagi!
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    Framework PHP mana yang disokong?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Nadi 2.0 menyokong Laravel, Symfony, CodeIgniter, WordPress, dan native PHP applications.
                    Monitoring yang lengkap untuk semua framework popular PHP anda.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    Bolehkah saya cuba beta version?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Kami sedang menjalankan program beta terhad. Daftar dengan email anda untuk
                    dipertimbangkan mendapat akses awal.
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
