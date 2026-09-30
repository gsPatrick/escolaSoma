import Header from "@/components/organisms/Header/Header";
import Hero from "@/components/organisms/Hero/Hero";
import About from "@/components/organisms/About/About";
import Units from "@/components/organisms/Units/Units";
import SloganBand from "@/components/organisms/SloganBand/SloganBand";
import Differentials from "@/components/organisms/Differentials/Differentials";
import VisitCTA from "@/components/organisms/VisitCTA/VisitCTA";
import Footer from "@/components/organisms/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Units />
        <SloganBand />
        <Differentials />
        <VisitCTA />
      </main>
      <Footer />
    </>
  );
}
