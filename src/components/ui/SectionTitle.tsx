interface SectionTitleProps {
  eyebrow: string
  title: string
  description?: string
  light?: boolean
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
}: SectionTitleProps) {
  const className = `section-title${light ? ' section-title--light' : ''}`

  return (
    <header className={className}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>

      {description && (
        <p className="section-title__copy">{description}</p>
      )}
    </header>
  )
}
