import {
  HeroSection,
  SystemIntroSection,
  ProductSystemSection,
  VelocityBannerSection,
  TutorialSection,
  SubscriptionSection,
  ValuePropSection,
  FAQSection,
} from '@/components/sections';
import HashScrollClient from '@/components/HashScrollClient';

export default function HomePage() {
  return (
    <>
      <HashScrollClient />
      <main className="min-h-screen">
        <HeroSection />
        <SystemIntroSection />
        <SubscriptionSection />
        <VelocityBannerSection />
        <ProductSystemSection />
        <TutorialSection />
        <FAQSection />
      </main>
    </>
  );
}
