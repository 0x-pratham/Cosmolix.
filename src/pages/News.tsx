import { useEffect, useRef, useState } from 'react'
import NewsCard from '../components/ui/NewsCard'
import NewsArticlePage from '../components/ui/NewsArticlePage'
import { SEED_ARTICLES, type NewsArticle } from '../data/newsData'

function useFadeIn(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return { ref, visible }
}

function NewsList({
  articles,
  onRead,
}: {
  articles: NewsArticle[]
  onRead: (id: string) => void
}) {
  const hero = useFadeIn(0.1)

  return (
    <>

      <section style={{
        background: 'linear-gradient(160deg, #EFF6FF 0%, #F0FDF9 100%)',
        padding: '9rem 2rem 5rem',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-60px', right: '-60px',
          width: '320px', height: '320px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.07), transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div
          ref={hero.ref}
          style={{
            maxWidth: '1100px', margin: '0 auto',
            opacity: hero.visible ? 1 : 0,
            transform: hero.visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', fontWeight: 600,
            letterSpacing: '0.12em', color: '#2563EB', textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>
            Cosmolix News
          </p>
          <h1 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontWeight: 900, fontSize: 'clamp(2rem, 4.5vw, 3rem)',
            color: '#0F172A', letterSpacing: '-0.02em', lineHeight: 1.1,
            marginBottom: '1rem',
          }}>
            What's Happening at{' '}
            <em style={{ color: '#2563EB', fontStyle: 'italic' }}>Cosmolix</em>
          </h1>
          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '1rem',
            color: '#64748B', lineHeight: 1.75, maxWidth: '480px',
          }}>
            Announcements, product updates, and company news — straight from the team.
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem 7rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {articles.length === 0 ? (
            <div style={{
              textAlign: 'center', padding: '5rem 2rem',
              fontFamily: 'DM Sans, sans-serif',
              color: '#94A3B8', fontSize: '1rem',
            }}>
              No news yet. Check back soon.
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}>
              {articles.map((article, i) => (
                <NewsCard
                  key={article.id}
                  article={article}
                  index={i}
                  onRead={onRead}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default function News() {

  const articles = SEED_ARTICLES

  const [openArticleId, setOpenArticleId] = useState<string | null>(null)

  // Sync with URL hash
  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash
      if (hash.startsWith('#news-article-')) {
        setOpenArticleId(hash.replace('#news-article-', ''))
      } else {
        setOpenArticleId(null)
      }
    }
    window.addEventListener('hashchange', onHash)
    onHash()
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const handleRead = (id: string) => {
    window.location.hash = `news-article-${id}`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBack = () => {
    window.location.hash = 'news'
    setOpenArticleId(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Find the article to display
  const openArticle = openArticleId
    ? articles.find(a => a.id === openArticleId) ?? null
    : null

  return (
    <div style={{ backgroundColor: '#FAFAF8', minHeight: '100vh' }}>

      {openArticle ? (
        <NewsArticlePage article={openArticle} onBack={handleBack} />
      ) : (
        <NewsList articles={articles} onRead={handleRead} />
      )}

    </div>
  )
}