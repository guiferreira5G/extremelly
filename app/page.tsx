import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AuthorityBar from "@/components/AuthorityBar";
import Categories from "@/components/Categories";
import FeaturedProduct from "@/components/FeaturedProduct";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import BeforeAfter from "@/components/BeforeAfter";
import B2BSection from "@/components/B2BSection";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AuthorityBar />
        <Categories />
        <FeaturedProduct />
        <HowItWorks />
        <Testimonials />
        <BeforeAfter />
        <B2BSection />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
