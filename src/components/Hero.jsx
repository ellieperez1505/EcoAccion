import React, { useState } from 'react';
import { playPop, playSuccess } from '../utils/audio';

export default function Hero({ onOpenGame }) {
  const [activeSpot, setActiveSpot] = useState(null);

  const spots = [
    { id: 'compost', title: '🪱 Compostera Escolar', desc: 'Transforma las servilletas sucias y restos de fruta en humus fértil para el suelo del patio.' },
    { id: 'huerto', title: '🪴 Huerto Vertical PET', desc: 'Macetas autorregantes hechas con botellas plásticas que ahorran 70% de agua por capilaridad.' },
    { id: 'mural', title: '🎨 Mural de Sensibilización', desc: 'Elaborado con recortes de revistas y periódicos para embellecer los muros del colegio.' },
    { id: 'tachos', title: '♻️ Batería de Tachos Clave', desc: 'Segregación en origen antes de que los residuos toquen y erosionen el suelo.' }
  ];

  return (
    <section id="inicio" className="hero-section">
      <div className="hero-content">
        <div className="hero-badge-container">
          <span className="badge-pill pulse-badge">🔬 Prototipo de Innovación Escolar 2026</span>
          <span className="badge-interactive">✨ Interactivo con React</span>
          <span className="badge-photo">📸 Fondos de Naturaleza Libres de Derechos</span>
        </div>

        <h2 className="hero-title">
          Transformando los Patios Escolares:<br />
          <span className="highlight-gradient">De Foco de Contaminación a Espacio Regenerativo</span>
        </h2>

        <p className="hero-desc">
          Durante el recreo, los patios de las instituciones educativas sufren la mayor acumulación de plásticos de un solo uso, envoltorios y servilletas. Este prototipo presenta un sistema integral de intervención física, separación en puntos clave y valorización de residuos para nutrir y proteger el suelo de nuestra institución.
        </p>

        {/* Quick CTA Actions */}
        <div className="hero-actions-row">
          <a href="#soluciones" className="btn-hero-primary" onClick={playPop}>
            <span>🛠️</span> Explorar 8 Soluciones
          </a>
          <button className="btn-hero-game" onClick={() => { playSuccess(); onOpenGame(); }}>
            <span>🎮</span> Desafío de Clasificación
          </button>
          <a href="#compostera" className="btn-hero-outline" onClick={playPop}>
            <span>🧪</span> Laboratorio de Compost
          </a>
        </div>

        {/* Interactive stats */}
        <div className="hero-stats">
          <div className="stat-card" onClick={playPop}>
            <span className="stat-num">1er</span>
            <span className="stat-label">Lugar de mayor contaminación escolar: Los Patios</span>
            <span className="stat-tag">Zona Crítica</span>
          </div>
          <div className="stat-card" onClick={playPop}>
            <span className="stat-num">8</span>
            <span className="stat-label">Líneas de acción y reciclaje aplicadas en aula</span>
            <span className="stat-tag">100% Prácticas</span>
          </div>
          <div className="stat-card" onClick={playPop}>
            <span className="stat-num">100%</span>
            <span className="stat-label">Residuos orgánicos y papel sucio transformados en abono</span>
            <span className="stat-tag">Cero Basura</span>
          </div>
        </div>

        {/* Panorama Ilustrado del Patio Escolar EcoAcción */}
        <div className="hero-panorama-banner interactive-panorama">
          <div className="panorama-hint">
            <span>💡 Pasa el cursor o haz clic en los elementos del patio para inspeccionar:</span>
            <div className="spot-tags">
              {spots.map((spot) => (
                <button
                  key={spot.id}
                  className={`spot-btn ${activeSpot === spot.id ? 'active' : ''}`}
                  onClick={() => {
                    playPop();
                    setActiveSpot(activeSpot === spot.id ? null : spot.id);
                  }}
                >
                  {spot.title}
                </button>
              ))}
            </div>
          </div>

          {activeSpot && (
            <div className="panorama-popup-card animate-scale-in">
              <button className="close-popup-btn" onClick={() => setActiveSpot(null)}>✕</button>
              <h4>{spots.find(s => s.id === activeSpot)?.title}</h4>
              <p>{spots.find(s => s.id === activeSpot)?.desc}</p>
            </div>
          )}

          <svg viewBox="0 0 960 260" xmlns="http://www.w3.org/2000/svg" className="panorama-svg">
            <defs>
              <linearGradient id="heroSky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fef9c3" />
                <stop offset="60%" stopColor="#ccfbf1" />
                <stop offset="100%" stopColor="#dcfce7" />
              </linearGradient>
              <linearGradient id="heroWall" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fefce8" />
                <stop offset="100%" stopColor="#f0fdfa" />
              </linearGradient>
              <filter id="glowYellow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Cielo con sol y nubes animadas */}
            <rect width="960" height="260" fill="url(#heroSky)" />
            <g className="sun-group">
              <circle cx="860" cy="50" r="45" fill="#fef08a" opacity="0.6" filter="url(#glowYellow)" />
              <circle cx="860" cy="50" r="30" fill="#facc15" />
              <path d="M860 10 L860 20 M860 80 L860 90 M820 50 L830 50 M890 50 L900 50 M832 22 L839 29 M881 71 L888 78 M832 78 L839 71 M881 29 L888 22" stroke="#ca8a04" strokeWidth="3" strokeLinecap="round" className="sun-rays" />
            </g>
            <path className="cloud-1" d="M120 40 Q140 25 170 30 Q195 20 220 35 Q245 30 260 45 Q265 60 240 65 L130 65 Q110 55 120 40 Z" fill="#ffffff" opacity="0.8" />
            <path className="cloud-2" d="M480 35 Q500 20 530 25 Q550 15 570 30 Q590 25 605 40 Q610 55 590 60 L490 60 Q470 50 480 35 Z" fill="#ffffff" opacity="0.75" />

            {/* Pabellón escolar al fondo */}
            <rect x="50" y="80" width="860" height="90" rx="8" fill="url(#heroWall)" stroke="#bbf7d0" strokeWidth="2" />
            <rect x="80" y="95" width="60" height="40" rx="4" fill="#a5f3fc" stroke="#14b8a6" strokeWidth="2" />
            <rect x="160" y="95" width="60" height="40" rx="4" fill="#a5f3fc" stroke="#14b8a6" strokeWidth="2" />
            <rect x="740" y="95" width="60" height="40" rx="4" fill="#a5f3fc" stroke="#14b8a6" strokeWidth="2" />
            <rect x="820" y="95" width="60" height="40" rx="4" fill="#a5f3fc" stroke="#14b8a6" strokeWidth="2" />

            {/* Huerto Vertical de Macetas PET en el muro */}
            <g className="clickable-svg-element" onClick={() => { playPop(); setActiveSpot('huerto'); }}>
              <line x1="260" y1="85" x2="260" y2="165" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3,3" />
              <line x1="310" y1="85" x2="310" y2="165" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3,3" />
              <line x1="360" y1="85" x2="360" y2="165" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3,3" />
              <rect x="248" y="100" width="24" height="20" rx="4" fill="#2dd4bf" stroke="#0d9488" strokeWidth="1.5" />
              <path d="M260 100 Q252 88 245 92 Q255 98 260 100 Q265 88 275 92 Q265 98 260 100" fill="#22c55e" />
              <circle cx="260" cy="88" r="3" fill="#facc15" />
              <rect x="298" y="125" width="24" height="20" rx="4" fill="#2dd4bf" stroke="#0d9488" strokeWidth="1.5" />
              <path d="M310 125 Q302 113 295 117 Q305 123 310 125 Q315 113 325 117 Q315 123 310 125" fill="#22c55e" />
              <circle cx="310" cy="113" r="3" fill="#fb7185" />
              <rect x="348" y="100" width="24" height="20" rx="4" fill="#2dd4bf" stroke="#0d9488" strokeWidth="1.5" />
              <path d="M360 100 Q352 88 345 92 Q355 98 360 100 Q365 88 375 92 Q365 98 360 100" fill="#22c55e" />
              <circle cx="360" cy="88" r="3" fill="#38bdf8" />
            </g>

            {/* Mural escolar tipo mosaico de revistas */}
            <g className="clickable-svg-element" onClick={() => { playPop(); setActiveSpot('mural'); }}>
              <rect x="400" y="90" width="160" height="55" rx="4" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5" />
              <path d="M410 135 L430 115 L450 135 L470 105 L490 135 L520 110 L550 135 Z" fill="#86efac" opacity="0.8" />
              <text x="480" y="108" fontSize="11" fontWeight="bold" fill="#0f766e" textAnchor="middle">🎨 MURAL ESCOLAR</text>
            </g>

            {/* Suelo del patio escolar libre de basura */}
            <path d="M0 170 Q480 160 960 170 L960 260 L0 260 Z" fill="#bbf7d0" />
            <path d="M0 190 Q480 180 960 190 L960 260 L0 260 Z" fill="#86efac" />

            {/* Césped y flores */}
            <path d="M70 195 Q75 185 80 195 M80 195 Q85 183 90 195 M180 200 Q185 190 190 200" stroke="#15803d" strokeWidth="2" fill="none" />
            <path d="M780 195 Q785 185 790 195 M880 190 Q885 180 890 190" stroke="#15803d" strokeWidth="2" fill="none" />

            {/* Estación de 3 Tachos en el patio */}
            <g transform="translate(610, 160)" className="clickable-svg-element" onClick={() => { playPop(); setActiveSpot('tachos'); }}>
              <rect x="0" y="10" width="32" height="48" rx="5" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
              <rect x="-3" y="6" width="38" height="8" rx="3" fill="#16a34a" />
              <text x="16" y="38" fontSize="16" textAnchor="middle" fill="#ffffff">♻️</text>
              <rect x="42" y="10" width="32" height="48" rx="5" fill="#ca8a04" stroke="#854d0e" strokeWidth="2" />
              <rect x="39" y="6" width="38" height="8" rx="3" fill="#a16207" />
              <text x="58" y="38" fontSize="16" textAnchor="middle" fill="#ffffff">🍂</text>
              <rect x="84" y="10" width="32" height="48" rx="5" fill="#334155" stroke="#0f172a" strokeWidth="2" />
              <rect x="81" y="6" width="38" height="8" rx="3" fill="#1e293b" />
              <text x="100" y="38" fontSize="14" textAnchor="middle" fill="#ffffff">🗑️</text>
              <rect x="15" y="-18" width="86" height="18" rx="4" fill="#ffffff" stroke="#14b8a6" strokeWidth="1.5" />
              <text x="58" y="-5" fontSize="9" fontWeight="bold" fill="#0d9488" textAnchor="middle">PUNTOS CLAVE</text>
            </g>

            {/* Compostera escolar */}
            <g transform="translate(110, 165)" className="clickable-svg-element" onClick={() => { playPop(); setActiveSpot('compost'); }}>
              <rect x="0" y="5" width="70" height="50" rx="6" fill="#78350f" stroke="#451a03" strokeWidth="2" />
              <line x1="5" y1="20" x2="65" y2="20" stroke="#92400e" strokeWidth="2" />
              <line x1="5" y1="35" x2="65" y2="35" stroke="#92400e" strokeWidth="2" />
              <text x="35" y="45" fontSize="12" fontWeight="bold" fill="#fef08a" textAnchor="middle">🪱 COMPOST</text>
              <path d="M35 5 Q30 -10 20 -8 Q28 0 35 5 Q42 -10 50 -8 Q42 0 35 5" fill="#22c55e" />
            </g>

            {/* Estudiantes */}
            <g transform="translate(200, 155)">
              <circle cx="20" cy="15" r="10" fill="#fde047" stroke="#ca8a04" strokeWidth="1.5" />
              <rect x="13" y="25" width="14" height="25" rx="4" fill="#14b8a6" />
              <line x1="16" y1="50" x2="14" y2="68" stroke="#115e59" strokeWidth="3" />
              <line x1="24" y1="50" x2="26" y2="68" stroke="#115e59" strokeWidth="3" />
              <path d="M28 32 L42 38 L38 48 L28 42 Z" fill="#38bdf8" />
              <path d="M42 38 L50 36" stroke="#0284c7" strokeWidth="2" />
              <circle cx="53" cy="40" r="1.5" fill="#0284c7" />
              <circle cx="55" cy="45" r="1.5" fill="#0284c7" />
            </g>
            <g transform="translate(565, 155)">
              <circle cx="20" cy="15" r="10" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.5" />
              <rect x="13" y="25" width="14" height="25" rx="4" fill="#f59e0b" />
              <line x1="16" y1="50" x2="14" y2="68" stroke="#78350f" strokeWidth="3" />
              <line x1="24" y1="50" x2="26" y2="68" stroke="#78350f" strokeWidth="3" />
              <rect x="30" y="20" width="6" height="14" rx="2" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />
            </g>

            {/* Mariposas animadas */}
            <g transform="translate(380, 50)" className="floating-butterfly-1">
              <path d="M0 0 Q-8 -10 -2 -14 Q4 -10 0 0 Q-8 10 -2 14 Q4 10 0 0" fill="#facc15" />
              <path d="M0 0 Q8 -10 2 -14 Q-4 -10 0 0 Q8 10 2 14 Q-4 10 0 0" fill="#fde047" />
            </g>
            <g transform="translate(710, 40)" className="floating-butterfly-2">
              <path d="M0 0 Q-8 -10 -2 -14 Q4 -10 0 0 Q-8 10 -2 14 Q4 10 0 0" fill="#2dd4bf" />
              <path d="M0 0 Q8 -10 2 -14 Q-4 -10 0 0 Q8 10 2 14 Q-4 10 0 0" fill="#5eead4" />
            </g>

            <rect x="20" y="222" width="280" height="26" rx="13" fill="#ffffff" opacity="0.9" stroke="#14b8a6" strokeWidth="1.5" />
            <text x="160" y="239" fontSize="11" fontWeight="bold" fill="#0d9488" textAnchor="middle">🌱 Patio Regenerado • Proyecto Escolar EcoAcción</text>
          </svg>
        </div>
      </div>
    </section>
  );
}

