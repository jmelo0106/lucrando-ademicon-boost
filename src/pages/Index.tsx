import Hero from "@/components/Hero";
import ConsultantIntro from "@/components/ConsultantIntro";
import HowItWorks from "@/components/HowItWorks";
import ProfitTable from "@/components/ProfitTable";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import ExplainerArticle from "@/components/ExplainerArticle";
import ContactCTA from "@/components/ContactCTA";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ConsultantIntro />
      <HowItWorks />
      <ProfitTable />
      <Benefits />
      <Testimonials />
      <ExplainerArticle />
      <ContactCTA />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
