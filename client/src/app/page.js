import CtaSection from "@/components/global/Ctasection";
import AboutSection from "@/components/home/AboutSection";
import FAQSection from "@/components/home/FAQSection";
import Hero from "@/components/home/hero";
import ServiceCards from "@/components/home/ServiceCards";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TreatmentSection from "@/components/home/TreatmentSection";

export default function Home() {
  return (
   <>
   <div className="">
    <Hero/>
    <ServiceCards/>
    <AboutSection/>
    <TreatmentSection/>
    <TestimonialsSection/>
    <FAQSection/>
    <CtaSection/>
   </div>
   </>
  );
}
