import { FAQ } from '@/components/marketing/layout/faq';
import { Footer } from '@/components/marketing/layout/footer';
import { Hero } from '@/components/marketing/layout/hero/hero';
import { HowItWorks } from '@/components/marketing/layout/how-it-works';
import { Navbar } from '@/components/marketing/layout/navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <FAQ />
      <Footer />
    </>
  );
}
