import { useState, useEffect, useRef } from 'react'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import type { NewsArticle } from '../../data/newsData'

type NewsCardProps = {
  article: NewsArticle
  index?: number
  onRead: (id: string) => void
}

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return { ref, visible }
}

export default function NewsCard({ article, index = 0, onRead }: NewsCardProps) {
  const { ref, visible } = useFadeIn()
  const [hovered, setHovered] = useState(false)
  const isGreen = article.tagColor === '#10B981'

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onRead(article.id)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(28px) scale(0.98)',
        transition: `
          opacity 0.55s ease ${index * 0.1}s,
          transform 0.55s ease ${index * 0.1}s,
          box-shadow 0.25s ease,
          border-color 0.25s ease,
          background 0.25s ease
        `,
        background: hovered ? 'white' : 'rgba(255,255,255,0.75)',
        borderRadius: '16px',
        border: hovered
          ? `1.5px solid ${isGreen ? 'rgba(16,185,129,0.28)' : 'rgba(37,99,235,0.28)'}`
          : '1.5px solid rgba(15,23,42,0.07)',
        boxShadow: hovered
          ? '0 12px 40px rgba(37,99,235,0.09)'
          : '0 1px 4px rgba(0,0,0,0.04)',
        cursor: 'pointer',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Animated top accent bar */}
      <div style={{
        height: '3px',
        background: `linear-gradient(90deg, ${article.tagColor}, ${isGreen ? '#2563EB' : '#10B981'})`,
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.3s ease',
      }} />

      <div style={{
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.85rem',
        flex: 1,
      }}>

        {/* Meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <span style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.68rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: article.tagColor,
            background: isGreen ? 'rgba(16,185,129,0.08)' : 'rgba(37,99,235,0.08)',
            padding: '3px 10px', borderRadius: '999px',
          }}>
            {article.tag}
          </span>
          <span style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem',
            color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '3px',
          }}>
            <Calendar size={11} strokeWidth={1.7} /> {article.date}
          </span>
          <span style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem',
            color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '3px',
          }}>
            <Clock size={11} strokeWidth={1.7} /> {article.readTime}
          </span>
        </div>

        {/* Headline */}
        <h3 style={{
          fontFamily: 'Playfair Display, Georgia, serif',
          fontWeight: 800, fontSize: '1.1rem',
          color: hovered ? article.tagColor : '#0F172A',
          lineHeight: 1.3, letterSpacing: '-0.01em',
          transition: 'color 0.2s ease',
        }}>
          {article.headline}
        </h3>

        {/* Summary */}
        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '0.88rem', color: '#64748B',
          lineHeight: 1.72, flex: 1,
        }}>
          {article.summary}
        </p>

        {/* Read more */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.35rem',
          fontFamily: 'DM Sans, sans-serif', fontWeight: 600,
          fontSize: '0.82rem', color: article.tagColor,
          marginTop: '0.25rem',
          opacity: hovered ? 1 : 0.5,
          transform: hovered ? 'translateX(4px)' : 'translateX(0)',
          transition: 'opacity 0.2s ease, transform 0.2s ease',
        }}>
          Read full announcement
          <ArrowRight size={13} strokeWidth={2} />
        </div>
      </div>
    </div>
  )
}