import { SectionTitle } from '../components/ui/SectionTitle'
import { articles as defaultArticles } from '../data/articles'
import { useStoredCollection } from '../hooks/useStoredCollection'
import type { Article } from '../types/article'

export function Writing() {
  const { items: articles } = useStoredCollection<Article>(
    'portfolio-articles',
    defaultArticles,
  )

  return (
    <section className="writing" id="writing">
      <SectionTitle eyebrow="WRITING" title={'Latest from\nMy Learning.'} />

      <div className="article-list">
        {articles.map((article, index) => (
          <article className="article-item" key={`${article.title}-${index}`}>
            <span>0{index + 1}</span>
            <div>
              <p>{article.category} {'\u00B7'} {article.status}</p>
              <h3>{article.title}</h3>
            </div>
            <span aria-hidden="true">{'\u2197'}</span>
          </article>
        ))}
      </div>
    </section>
  )
}
