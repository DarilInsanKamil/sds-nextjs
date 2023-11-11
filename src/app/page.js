import ContactSectionHome from '@/components/Home/contact-section'
import HerosSectionHome from '@/components/Home/hero-section'
import PartnerSectionHome from '@/components/Home/partner-section'
import ServiceHomeSection from '@/components/Home/service-section'
import WhyUsSectionHome from '@/components/Home/whyus-section'

export default function Home() {
  return (
    <main>
      <HerosSectionHome />
      <ServiceHomeSection />
      <PartnerSectionHome />
      <WhyUsSectionHome />
      <ContactSectionHome />
    </main>
  )
}
