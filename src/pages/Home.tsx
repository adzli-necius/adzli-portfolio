import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'
import { ContactCTA } from '../sections/ContactCTA'
import { Experience } from '../sections/Experience'
import { FeaturedProjects } from '../sections/FeaturedProjects'
import { Hero } from '../sections/Hero'
import { Services } from '../sections/Services'
import { Writing } from '../sections/Writing'

export function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <FeaturedProjects />

        <section className="section journal">
          <div className="container journal-grid">
            <Experience />
            <Writing />
          </div>
        </section>

        <ContactCTA />
      </main>

      <Footer />
    </>
  )
}
