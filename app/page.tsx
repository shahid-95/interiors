import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import CompleteSolution from "@/components/CompleteSolution";
import ResidentialCommercial from "@/components/ResidentialCommercial";
import ServiceArea from "@/components/ServiceArea";
// import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import GoogleReviews from "@/components/GoogleReviews";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <CompleteSolution />
      <ResidentialCommercial />
      <ServiceArea />
      <GoogleReviews />
      <CTA />
    </>
  );
}
