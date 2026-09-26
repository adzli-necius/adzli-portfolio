import { SectionTitle } from '../components/ui/SectionTitle'
import { capabilities as defaultCapabilities } from '../data/capabilities'
import { useStoredCollection } from '../hooks/useStoredCollection'
import type { Capability } from '../types/capability'

export function Services() {
  const { items: capabilities } = useStoredCollection<Capability>(
    'portfolio-capabilities',
    defaultCapabilities,
  )

  return (
    <section className="section services" id="about">
      <div className="container">
        <div className="services__intro">
          <SectionTitle
            eyebrow="WHAT I DO"
            title={'From Ideas to\nReliable Systems.'}
          />
          <p>
            I build maintainable applications and backend systems with clear
            architecture, thoughtful integrations, and tools chosen for the job.
          </p>
        </div>

        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article className="capability-card" key={capability.number}>
              <span>{capability.number}</span>
              <h3>{capability.title}</h3>
              <ul>
                {capability.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
