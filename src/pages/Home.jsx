import Hero from "../components/Hero";
import Journey from "../components/Journey";
import Features from "../components/Features";
import Businesses from "../components/Businesses";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import AppStoreLink from "../components/AppStoreLink";
import Footer from "../components/Footer";
import CurveDivider from "../components/CurveDivider";
function Home() {
  return (
    <>

      <Hero />

      <Journey />

      <Features />
      <CurveDivider fill="#FFEFE4" backdrop="#ffffff" flip height={160} />
      <Businesses />

      <Stats />

      <Testimonials />

      <AppStoreLink />
      
      <CTA />
      <FAQ />

      <Footer />
    </>
  );
}

export default Home;