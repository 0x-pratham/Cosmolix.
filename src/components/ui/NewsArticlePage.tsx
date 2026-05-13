"use client";
import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react'
import type { NewsArticle } from '../../data/newsData'

// 1. Define the interface for article content blocks to fix the 'any' error
interface ContentBlock {
  heading?: string;
  body: string;
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

type NewsArticlePageProps = {
  article: NewsArticle
  onBack: () => void
}

export default function NewsArticlePage({ article, onBack }: NewsArticlePageProps) {
  const { ref, visible } = useFadeIn()
  const isGreen = article.tagColor === '#10B981'

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [article.id])

  return (
    <section style={{ padding: '9rem 2rem 6rem' }}>
      <div
        ref={ref}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
          maxWidth: '720px',
          margin: '0 auto',
        }}
      >
        {/* Back button */}
        <button
          onClick={onBack}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem',
            color: '#64748B', background: 'none', border: 'none',
            cursor: 'pointer', padding: 0, marginBottom: '2.5rem',
            transition: 'color 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#2563EB')}
          onMouseLeave={e => (e.currentTarget.style.color = '#64748B')}
        >
          ← Back to Updates
        </button>

        {/* Meta */}
        <div style={{
          display: 'flex', gap: '1rem',
          alignItems: 'center', flexWrap: 'wrap',
          marginBottom: '1.5rem',
        }}>
          <span style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.7rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: article.tagColor,
            background: isGreen ? 'rgba(16,185,129,0.08)' : 'rgba(37,99,235,0.08)',
            padding: '4px 12px', borderRadius: '999px',
          }}>
            {article.tag}
          </span>
          <span style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem',
            color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '4px',
          }}>
            <Calendar size={12} /> {article.date}
          </span>
          <span style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem',
            color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '4px',
          }}>
            <Clock size={12} /> {article.readTime}
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontWeight: 900,
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          color: '#0F172A', lineHeight: 1.12,
          letterSpacing: '-0.02em', marginBottom: '2rem',
        }}>
          {article.headline}
        </h1>

        <div style={{
          height: '1px',
          background: `linear-gradient(90deg, ${article.tagColor}, rgba(37,99,235,0.3), transparent)`,
          marginBottom: '2rem',
        }} />

        {/* 2. Added explicit types to parameters to resolve the error */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {(article.content ?? []).map((block: ContentBlock, i: number) => (
            <div key={i}>
              {block.heading && (
                <h2 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 800, fontSize: '1.25rem',
                  color: '#0F172A', marginBottom: '0.6rem',
                }}>
                  {block.heading}
                </h2>
              )}
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '1rem', color: '#334155', lineHeight: 1.85,
              }}>
                {block.body}
              </p>
            </div>
          ))}

          {/* CTA box */}
          {article.ctaHash && (
            <div style={{
              marginTop: '1.5rem',
              background: 'linear-gradient(135deg, #EFF6FF, #F0FDF9)',
              border: '1px solid rgba(37,99,235,0.1)',
              borderRadius: '24px', padding: '2.5rem',
              display: 'flex', flexDirection: 'column', gap: '1rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Tag size={16} color="#2563EB" />
                <span style={{
                  fontFamily: 'DM Sans, sans-serif', fontWeight: 800,
                  fontSize: '0.75rem', color: '#0F172A', textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  {article.ctaText ?? 'Next Steps'}
                </span>
              </div>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.95rem', color: '#64748B', lineHeight: 1.7,
              }}>
                {article.ctaHash === 'internships'
                  ? <>Please navigate to the <strong style={{ color: '#0F172A' }}>Careers</strong> portal, select the <strong style={{ color: '#0F172A' }}>Industrial Internship</strong> module, and initiate your enrollment.</>
                  : <>Explore the detailed documentation and strategic roadmap for this initiative below.</>
                }
              </p>
              <a
                href={`#${article.ctaHash}`}
                onClick={e => { e.preventDefault(); window.location.hash = article.ctaHash! }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  fontFamily: 'DM Sans, sans-serif', fontWeight: 700,
                  fontSize: '0.85rem', color: 'white',
                  background: '#0F172A',
                  textDecoration: 'none', padding: '0.9rem 2rem',
                  borderRadius: '12px', width: 'fit-content',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#2563EB')}
                onMouseLeave={e => (e.currentTarget.style.background = '#0F172A')}
              >
                {article.ctaText ?? 'Begin Process'} <ArrowRight size={14} />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}