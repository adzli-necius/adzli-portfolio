import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { About } from "../sections/About";
import { ContactCTA } from "../sections/ContactCTA";
import { Experience } from "../sections/Experience";
import { FeaturedProjects } from "../sections/FeaturedProjects";
import { FreelanceServices } from "../sections/FreelanceServices";
import { Hero } from "../sections/Hero";
import { Services } from "../sections/Services";

export function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        <Services />
        <Experience />
        <FreelanceServices />
        <About />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
