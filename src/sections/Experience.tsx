import { useRef } from 'react'
import { SectionTitle } from '../components/ui/SectionTitle'
import { experience as defaultExperience } from '../data/experience'
import { useStoredCollection } from '../hooks/useStoredCollection'
import type { ExperienceItem } from '../types/experience'

export function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const { items: experience } = useStoredCollection<ExperienceItem>(
    'portfolio-experience',
    defaultExperience,
  )

  const scrollTimeline = (direction: 'up' | 'down') => {
    const timeline = timelineRef.current
    if (!timeline) return

    timeline.scrollBy({
      top: direction === 'down'
        ? timeline.clientHeight * 0.8
        : timeline.clientHeight * -0.8,
      behavior: 'smooth',
    })
  }

  return (
    <section className="journey" id="experience">
      <div className="journey__heading">
        <SectionTitle eyebrow="EXPERIENCE" title="My Journey." />

        <div className="journey__controls" aria-label="Experience navigation">
          <button type="button" aria-label="Scroll up" onClick={() => scrollTimeline('up')}>
            {'\u2191'}
          </button>
          <button type="button" aria-label="Scroll down" onClick={() => scrollTimeline('down')}>
            {'\u2193'}
          </button>
        </div>
      </div>

      <div
        ref={timelineRef}
        className="timeline"
        role="region"
        aria-label="Vertically scrollable work experience timeline"
        tabIndex={0}
      >
        {experience.map((item, index) => (
          <article className="timeline-item" key={`${item.title}-${index}`}>
            <div className="timeline-item__marker" />
            <div>
              {item.isPlaceholder && <span className="placeholder-label">PLACEHOLDER</span>}
              <p className="timeline-item__period">{item.period}</p>
              <h3>{item.title}</h3>
              <p className="timeline-item__org">{item.organization}</p>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
