import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ForYou from "@/components/ForYou";
import Differentials from "@/components/Differentials";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Included from "@/components/Included";
import Faq from "@/components/Faq";
import About from "@/components/About";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import WhatsappFloatingButton from "@/components/WhatsappFloatingButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ForYou />
        <Differentials />
        <Services />
        <HowItWorks />
        <Included />
        <Faq />
        <About />
        <Cta />
      </main>
      <Footer />
      <WhatsappFloatingButton />
    </>
  );
}
