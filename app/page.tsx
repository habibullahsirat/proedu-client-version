import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Students from "@/components/Students";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import Companies from "@/components/Companies";

export default function LandingPage() {
  return (
    <div className="font-['Poppins'] min-h-screen overflow-x-hidden bg-white text-gray-800">
      <Hero />
      <Courses />
      <About />
      <CTA />
      <Students />
      <Testimonials />
      <FAQSection />
      <Companies />
    </div>
  );
}
