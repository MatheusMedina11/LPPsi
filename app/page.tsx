import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import HowItWorks from "@/components/HowItWorks";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import WhatsappFloatingButton from "@/components/WhatsappFloatingButton";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Differentials />
      <HowItWorks />
      <Faq />
      <Cta />
      <Footer />
      <WhatsappFloatingButton />
    </main>
  );
}
