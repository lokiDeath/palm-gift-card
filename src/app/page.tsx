import Header from "@/components/palm/header";
import Hero from "@/components/palm/hero";
import WhyChooseUs from "@/components/palm/why-choose-us";
import Services from "@/components/palm/services";
import Brands from "@/components/palm/brands";
import About from "@/components/palm/about";
import Team from "@/components/palm/team";
import ChinaOffice from "@/components/palm/china-office";
import Contact from "@/components/palm/contact";
import Footer from "@/components/palm/footer";
import FloatingWhatsApp from "@/components/palm/floating-whatsapp";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFAF7]">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyChooseUs />
        <Services />
        <Brands />
        <About />
        <Team />
        <ChinaOffice />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
