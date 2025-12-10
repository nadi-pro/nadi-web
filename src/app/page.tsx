import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PrimaryFeatures />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}
