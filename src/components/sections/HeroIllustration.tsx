export default function HeroIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 550 500" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg">
        <g transform="translate(-27.5, -25) scale(1.1)">
          
          <defs>
            <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.7"/>
              <stop offset="60%" stopColor="#2563EB" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="bgAura" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.07"/>
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0"/>
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="softGlow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="chipShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#2563EB" floodOpacity="0.12"/>
            </filter>
            <filter id="nodeGlow">
              <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          <circle cx="250" cy="250" r="230" fill="url(#bgAura)"/>

          {[
            [45,70,1],[415,55,0.8],[490,170,1.1],[28,310,0.9],[465,340,1],
            [95,430,0.7],[375,450,1],[195,22,0.8],[318,18,1],[148,155,0.6],
            [405,125,0.9],[48,205,0.7],[472,268,1],[118,385,0.8],[342,485,0.9],
            [460,420,0.6],[70,140,0.5],[430,300,0.7]
          ].map(([x,y,r],i) => (
            <circle key={i} cx={x} cy={y} r={r} fill="#2563EB" opacity={0.08 + (i % 4)*0.06}/>
          ))}

          <g opacity="0.15" stroke="#2563EB" strokeWidth="0.9">
            <line x1="250" y1="72"  x2="390" y2="160"/>
            <line x1="390" y1="160" x2="420" y2="308"/>
            <line x1="420" y1="308" x2="310" y2="415"/>
            <line x1="310" y1="415" x2="155" y2="418"/>
            <line x1="155" y1="418" x2="75"  y2="308"/>
            <line x1="75"  y1="308" x2="100" y2="158"/>
            <line x1="100" y1="158" x2="250" y2="72"/>
            <line x1="250" y1="72"  x2="420" y2="308"/>
            <line x1="390" y1="160" x2="155" y2="418"/>
            <line x1="100" y1="158" x2="310" y2="415"/>
            <line x1="75"  y1="308" x2="310" y2="415"/>
          </g>

          <g opacity="0.18" stroke="#3B82F6" strokeWidth="0.8">
            <line x1="250" y1="148" x2="338" y2="195"/>
            <line x1="338" y1="195" x2="352" y2="295"/>
            <line x1="352" y1="295" x2="280" y2="358"/>
            <line x1="280" y1="358" x2="175" y2="352"/>
            <line x1="175" y1="352" x2="142" y2="258"/>
            <line x1="142" y1="258" x2="195" y2="165"/>
            <line x1="195" y1="165" x2="250" y2="148"/>
            <line x1="250" y1="148" x2="352" y2="295"/>
            <line x1="338" y1="195" x2="175" y2="352"/>
            <line x1="142" y1="258" x2="280" y2="358"/>
          </g>

          <g opacity="0.2" stroke="#2563EB" strokeWidth="0.9" strokeDasharray="4 4">
            <line x1="250" y1="250" x2="250" y2="148"/>
            <line x1="250" y1="250" x2="338" y2="195"/>
            <line x1="250" y1="250" x2="352" y2="295"/>
            <line x1="250" y1="250" x2="280" y2="358"/>
            <line x1="250" y1="250" x2="175" y2="352"/>
            <line x1="250" y1="250" x2="142" y2="258"/>
            <line x1="250" y1="250" x2="195" y2="165"/>
          </g>

          {[[250,72],[390,160],[420,308],[310,415],[155,418],[75,308],[100,158]].map(([x,y],i) => (
            <g key={`on${i}`} filter="url(#softGlow)">
              <circle cx={x} cy={y} r="8" fill="white" stroke="#2563EB" strokeWidth="1.5" strokeOpacity="0.6"/>
              <circle cx={x} cy={y} r="3.5" fill="#2563EB" opacity="0.85"/>
            </g>
          ))}

          {[[250,148],[338,195],[352,295],[280,358],[175,352],[142,258],[195,165]].map(([x,y],i) => (
            <g key={`in${i}`} filter="url(#softGlow)">
              <circle cx={x} cy={y} r="5.5" fill="white" stroke="#3B82F6" strokeWidth="1.2" strokeOpacity="0.7"/>
              <circle cx={x} cy={y} r="2.5" fill="#3B82F6" opacity="0.8"/>
            </g>
          ))}

          <circle cx="250" cy="250" r="55" fill="url(#coreGrad)" filter="url(#nodeGlow)"/>
          <circle cx="250" cy="250" r="42" fill="white" stroke="#2563EB" strokeWidth="1.5" strokeOpacity="0.4"/>
          <circle cx="250" cy="250" r="32" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.4"/>

          <text x="250" y="258" textAnchor="middle" fontFamily="Playfair Display, Georgia, serif" fontWeight="900" fontSize="22" fill="#2563EB" filter="url(#glow)" letterSpacing="2" fontStyle="italic">
            CX
          </text>

          <g transform="translate(348, 62)" filter="url(#chipShadow)">
            <rect width="118" height="46" rx="23" fill="white" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.25"/>
            <circle cx="23" cy="23" r="9" fill="rgba(37,99,235,0.1)"/>
            <circle cx="23" cy="23" r="4" fill="#2563EB"/>
            <text x="38" y="19" fill="#9A8E82" fontSize="8" fontFamily="DM Sans,sans-serif">Services</text>
            <text x="38" y="33" fill="#1A1208" fontSize="10" fontFamily="Playfair Display,serif" fontWeight="700">IT &amp; Cloud</text>
          </g>

          <g transform="translate(29, 218)" filter="url(#chipShadow)">
            <rect width="124" height="46" rx="23" fill="white" stroke="#10B981" strokeWidth="1" strokeOpacity="0.25"/>
            <circle cx="23" cy="23" r="9" fill="rgba(16,185,129,0.1)"/>
            <circle cx="23" cy="23" r="4" fill="#10B981"/>
            <text x="38" y="19" fill="#9A8E82" fontSize="8" fontFamily="DM Sans,sans-serif">Programs</text>
            <text x="38" y="33" fill="#1A1208" fontSize="10" fontFamily="Playfair Display,serif" fontWeight="700">Internships</text>
          </g>

          <g transform="translate(338, 385)" filter="url(#chipShadow)">
            <rect width="118" height="46" rx="23" fill="white" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.25"/>
            <circle cx="23" cy="23" r="9" fill="rgba(37,99,235,0.1)"/>
            <circle cx="23" cy="23" r="4" fill="#2563EB"/>
            <text x="38" y="19" fill="#9A8E82" fontSize="8" fontFamily="DM Sans,sans-serif">Expertise</text>
            <text x="38" y="33" fill="#1A1208" fontSize="10" fontFamily="Playfair Display,serif" fontWeight="700">AI &amp; ML</text>
          </g>

          <g transform="translate(40, 40)" filter="url(#chipShadow)">
            <rect width="160" height="46" rx="23" fill="white" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.25"/>
            <circle cx="23" cy="23" r="9" fill="rgba(37,99,235,0.1)"/>
            <circle cx="23" cy="23" r="4" fill="#2563EB"/>
            <text x="38" y="19" fill="#9A8E82" fontSize="8" fontFamily="DM Sans,sans-serif">Solutions</text>
            <text x="38" y="33" fill="#1A1208" fontSize="10" fontFamily="Playfair Display,serif" fontWeight="700">
              Product Development
            </text>
          </g>

          <g transform="translate(40, 390)" filter="url(#chipShadow)">
            <rect width="180" height="46" rx="23" fill="white" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.25"/>
            <circle cx="23" cy="23" r="9" fill="rgba(37,99,235,0.1)"/>
            <circle cx="23" cy="23" r="4" fill="#2563EB"/>
            <text x="38" y="19" fill="#9A8E82" fontSize="8" fontFamily="DM Sans,sans-serif">Insights</text>
            <text x="38" y="33" fill="#1A1208" fontSize="10" fontFamily="Playfair Display,serif" fontWeight="700">
              Data Analytics &amp; Research
            </text>
          </g>

          <g transform="translate(330, 230)" filter="url(#chipShadow)">
            <rect width="190" height="46" rx="23" fill="white" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.25"/>
            <circle cx="23" cy="23" r="9" fill="rgba(37,99,235,0.1)"/>
            <circle cx="23" cy="23" r="4" fill="#2563EB"/>
            <text x="38" y="19" fill="#9A8E82" fontSize="8" fontFamily="DM Sans,sans-serif">Learning</text>
            <text x="38" y="33" fill="#1A1208" fontSize="10" fontFamily="Playfair Display,serif" fontWeight="700">
              Certified Training
            </text>
          </g>

          <circle cx="250" cy="250" r="55" fill="none" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.15">
            <animate attributeName="r" from="55" to="115" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="stroke-opacity" from="0.3" to="0" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="250" cy="250" r="55" fill="none" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.1">
            <animate attributeName="r" from="55" to="115" dur="3s" begin="1.5s" repeatCount="indefinite"/>
            <animate attributeName="stroke-opacity" from="0.2" to="0" dur="3s" begin="1.5s" repeatCount="indefinite"/>
          </circle>

          <g opacity="0.04">
            {[0,1,2,3,4,5,6,7].map(i=>(
              <line key={`v${i}`} x1={i*70} y1="0" x2={i*70} y2="500" stroke="#2563EB" strokeWidth="0.5"/>
            ))}
            {[0,1,2,3,4,5,6,7].map(i=>(
              <line key={`h${i}`} x1="0" y1={i*70} x2="500" y2={i*70} stroke="#2563EB" strokeWidth="0.5"/>
            ))}
          </g>

        </g>
      </svg>
    </div>
  )
}