"use client";
import { useEffect, useRef, useState } from 'react'
import { FlaskConical, ShieldCheck, Cpu, } from 'lucide-react'

function useFadeIn(threshold = 0.15) {
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

function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  const { ref, visible } = useFadeIn(0.1)
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
        textAlign: 'center',
        padding: '2rem 1.5rem',
        background: 'white',
        borderRadius: '24px',
        border: '1px solid rgba(15,23,42,0.05)',
        boxShadow: '0 4px 20px rgba(15,23,42,0.03)',
      }}
    >
      <div style={{
        fontFamily: 'Playfair Display, serif',
        fontWeight: 900,
        fontSize: '2rem',
        color: '#0F172A',
        letterSpacing: '-0.02em',
        lineHeight: 1,
        marginBottom: '0.5rem',
      }}>
        {value}
      </div>
      <div style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '0.75rem',
        color: '#64748B',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.1em'
      }}>
        {label}
      </div>
    </div>
  )
}

function PillarCard({ icon: Icon, title, desc, index }: any) {
  const { ref, visible } = useFadeIn(0.1)
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.55s ease ${index * 0.1}s, transform 0.55s ease ${index * 0.1}s`,
        padding: '2.5rem',
        background: 'white',
        borderRadius: '32px',
        border: '1px solid rgba(15,23,42,0.06)',
      }}
    >
      <div style={{
        width: '56px', height: '56px', borderRadius: '16px',
        background: 'rgba(37,99,235,0.05)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '1.5rem',
      }}>
        <Icon size={24} color="#2563EB" strokeWidth={1.5} />
      </div>
      <h3 style={{
        fontFamily: 'Playfair Display, serif',
        fontWeight: 800, fontSize: '1.25rem',
        color: '#0F172A', marginBottom: '0.75rem',
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '0.9rem', color: '#64748B', lineHeight: 1.7,
      }}>
        {desc}
      </p>
    </div>
  )
}

export default function About() {
  const hero = useFadeIn(0.1)
  const mission = useFadeIn(0.15)
  const vision = useFadeIn(0.15)

  return (
    <div style={{ backgroundColor: '#FAFAF8', minHeight: '100vh' }}>
      <section style={{ padding: '10rem 2rem 8rem', position: 'relative' }}>
        <div ref={hero.ref} style={{
          maxWidth: '900px', margin: '0 auto', textAlign: 'center',
          opacity: hero.visible ? 1 : 0,
          transform: hero.visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}>
          <span style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem',
            fontWeight: 800, letterSpacing: '0.25em', color: '#2563EB',
            textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block'
          }}>
            Institutional Excellence
          </span>
          <h1 style={{
            fontFamily: 'Playfair Display, serif', fontWeight: 900,
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#0F172A',
            letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '2rem',
          }}>
            Engineering Strategic <br />
            <em style={{ color: '#2563EB', fontStyle: 'italic' }}>Digital Ecosystems.</em>
          </h1>
          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '1.15rem',
            color: '#64748B', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto 3rem',
          }}>
            Cosmolix Private Limited is a specialized technology firm dedicated to 
            software customization, artificial intelligence research, and high-fidelity 
            industrial training modules.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="#mission" style={{
              fontFamily: 'DM Sans, sans-serif', fontWeight: 700,
              fontSize: '0.85rem', color: 'white', background: '#0F172A',
              textDecoration: 'none', padding: '1rem 2.5rem',
              borderRadius: '16px', boxShadow: '0 10px 30px rgba(15,23,42,0.1)'
            }}>
              Our Objectives
            </a>
          </div>
        </div>
      </section>

      {/* --- OPERATIONAL METRICS --- */}
      <section style={{ padding: '0 2rem 6rem' }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
        }}>
          {[
            { value: 'ISO 9001', label: 'Quality Standards', delay: 0 },
            { value: 'AI-First', label: 'Research Approach', delay: 0.1 },
            { value: 'Enterprise', label: 'Deployment Scale', delay: 0.2 },
            { value: 'Verified', label: 'Industrial Training', delay: 0.3 },
          ].map(s => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* --- MISSION & VISION --- */}
      <section id="mission" style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '8rem' }}>
          
          {/* Mission */}
          <div ref={mission.ref} style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '6rem', alignItems: 'center',
            opacity: mission.visible ? 1 : 0,
            transform: mission.visible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}>
            <div>
              <h2 style={{
                fontFamily: 'Playfair Display, serif', fontWeight: 900,
                fontSize: '2.5rem', color: '#0F172A', letterSpacing: '-0.02em',
                marginBottom: '1.5rem', lineHeight: 1.1
              }}>
                Strategic Digital <br />
                <span style={{ color: '#2563EB' }}>Transformation</span>
              </h2>
              <p style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: '1rem',
                color: '#64748B', lineHeight: 1.8,
              }}>
                Our mission is to empower global institutions through proprietary software 
                solutions and advanced machine learning research. We bridge the gap between 
                theoretical AI and production-ready enterprise architecture.
              </p>
            </div>
            <div style={{
              background: 'white', borderRadius: '32px', padding: '3rem',
              border: '1px solid rgba(15,23,42,0.06)', boxShadow: '0 20px 40px rgba(0,0,0,0.02)'
            }}>
              {[
                { label: 'Architectural Fidelity', pct: '100%' },
                { label: 'Security Benchmarking', pct: '98%' },
                { label: 'Deployment Agility', pct: '95%' },
              ].map(item => (
                <div key={item.label} style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontFamily: 'DM Sans', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase' }}>{item.label}</span>
                    <span style={{ color: '#2563EB', fontWeight: 800 }}>{item.pct}</span>
                  </div>
                  <div style={{ height: '4px', background: '#F1F5F9', borderRadius: '2px' }}>
                    <div style={{ width: item.pct, height: '100%', background: '#2563EB', borderRadius: '2px' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision */}
          <div ref={vision.ref} style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '6rem', alignItems: 'center',
            opacity: vision.visible ? 1 : 0,
            transform: vision.visible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}>
            <div style={{ order: 2 }}>
              <h2 style={{
                fontFamily: 'Playfair Display, serif', fontWeight: 900,
                fontSize: '2.5rem', color: '#0F172A', letterSpacing: '-0.02em',
                marginBottom: '1.5rem', lineHeight: 1.1
              }}>
                Standardizing <br />
                <span style={{ color: '#2563EB' }}>Professional Excellence</span>
              </h2>
              <p style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: '1rem',
                color: '#64748B', lineHeight: 1.8,
              }}>
                To be the industry benchmark for IT-enabled services and scientific research, 
                cultivating a global ecosystem where technology serves as a catalyst for 
                measurable institutional growth and professional development.
              </p>
            </div>
            <div style={{ order: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {['Proprietary', 'Scalable', 'Compliant', 'Innovative'].map(word => (
                <div key={word} style={{
                  padding: '1.5rem', background: 'white', borderRadius: '20px',
                  border: '1px solid rgba(15,23,42,0.05)', textAlign: 'center',
                  fontFamily: 'Playfair Display', fontWeight: 800, color: '#0F172A'
                }}>
                  {word}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE PILLARS --- */}
      <section style={{ backgroundColor: '#F8FAFF', padding: '8rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{
              fontFamily: 'Playfair Display, serif', fontWeight: 900,
              fontSize: '3rem', color: '#0F172A', letterSpacing: '-0.03em'
            }}>
              Operational <em style={{ color: '#2563EB' }}>Foundations</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <PillarCard 
              icon={FlaskConical} 
              title="Scientific R&D" 
              desc="Our engineering culture is rooted in rigorous research and development, ensuring every deployment is backed by validated technical whitepapers."
              index={0}
            />
            <PillarCard 
              icon={ShieldCheck} 
              title="Architectural Integrity" 
              desc="We adhere to global security benchmarks and ISO standards, delivering solutions that are secure by design and compliant with international protocols."
              index={1}
            />
            <PillarCard 
              icon={Cpu} 
              title="AI Implementation" 
              desc="Specialized in the fine-tuning and deployment of deep learning models for enterprise environments, focusing on operational intelligence."
              index={2}
            />
          </div>
        </div>
      </section>

      {/* --- PARTNERSHIP CTA --- */}
      <section style={{ padding: '8rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '650px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Playfair Display, serif', fontWeight: 900,
            fontSize: '3rem', color: '#0F172A', marginBottom: '1.5rem'
          }}>
            Establish a Professional <br />
            <em style={{ color: '#2563EB' }}>Partnership</em>
          </h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif', color: '#64748B', 
            fontSize: '1.1rem', marginBottom: '3rem'
          }}>
            Consult with our engineering division to discuss project architecture 
            and strategic deployment of industrial solutions.
          </p>
          <a href="/#contact" style={{
            fontFamily: 'DM Sans, sans-serif', fontWeight: 700,
            color: 'white', background: '#0F172A', textDecoration: 'none',
            padding: '1.25rem 3.5rem', borderRadius: '16px', display: 'inline-block'
          }}>
            Initiate Consultation
          </a>
        </div>
      </section>

    </div>
  )
}