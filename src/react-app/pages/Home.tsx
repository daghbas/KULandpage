import Hero from '@/react-app/components/Hero';
import Services from '@/react-app/components/Services';
import ImageShowcase from '@/react-app/components/ImageShowcase';
import ServicesShowcase from '@/react-app/components/ServicesShowcase';
import Testimonials from '@/react-app/components/Testimonials';
import CallToAction from '@/react-app/components/CallToAction';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <ImageShowcase />
      <ServicesShowcase />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}
