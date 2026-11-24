import React, { useState } from 'react';
import { ACCIONES } from '../data/ecoData';
import { playPop, playSuccess } from '../utils/audio';

export default function AccionesReciclaje({ onSelectAccion }) {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [likedCards, setLikedCards] = useState({});

  const filterCategories = [
    { id: 'todos', label: 'Todos' },
    { id: 'plastico', label: 'Plásticos PET' },
    { id: 'papel', label: 'Papel, Revistas & Cartón' },
    { id: 'organico', label: 'Compostaje de Suelo' }
  ];

  const handleLike = (id, e) => {
    e.stopPropagation();
    playSuccess();
    setLikedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredAcciones = ACCIONES.filter(item => {
    const matchesCat = activeCategory === 'todos' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.catLabel.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="soluciones" className="section container">
      <div className="section-wrapper-card">
        <div className="section-header text-center">
          <div className="section-tag">Economía Circular Escolar</div>
          <h2 className="section-title">🛠️ Prototipo de Acciones: Cómo Solucionamos la Contaminación</h2>
          <p className="section-subtitle">
            Cada residuo recogido en el patio tiene una ruta técnica de valorización dentro de la escuela. Haz clic en <strong>Pasos a seguir</strong> o en <strong>🎥 Video</strong> para ver la guía práctica interactiva y el video de referencia.
          </p>
        </div>

        {/* Banner Ilustrado del Taller de Reciclaje */}
        <div className="section-art-banner banner-soluciones-overview">
          <svg viewBox="0 0 960 160" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="solBannerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef9c3" />
                <stop offset="50%" stopColor="#ccfbf1" />
                <stop offset="100%" stopColor="#dcfce7" />
              </linearGradient>
            </defs>
            <rect width="960" height="160" rx="12" fill="url(#solBannerGrad)" />
            <rect x="40" y="70" width="880" height="75" rx="8" fill="#ffffff" stroke="#14b8a6" strokeWidth="2" opacity="0.95" />
            <rect x="340" y="15" width="280" height="36" rx="18" fill="#ffffff" stroke="#ca8a04" strokeWidth="2" />
            <text x="480" y="38" fontSize="14" fontWeight="800" fill="#0f766e" textAnchor="middle">🎨 TALLER DE ECONOMÍA CIRCULAR</text>

            <g transform="translate(70, 80)">
              <rect x="0" y="10" width="22" height="45" rx="4" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
              <text x="32" y="38" fontSize="20">✂️</text>
              <text x="62" y="38" fontSize="12" fontWeight="bold" fill="#0d9488">Macetas & Organizadores</text>
            </g>

            <g transform="translate(300, 80)">
              <rect x="0" y="10" width="22" height="45" rx="4" fill="#a7f3d0" stroke="#059669" strokeWidth="1.5" />
              <text x="30" y="38" fontSize="20">🧱</text>
              <text x="60" y="38" fontSize="12" fontWeight="bold" fill="#15803d">Ecoladrillos para Jardín</text>
            </g>

            <g transform="translate(520, 80)">
              <text x="0" y="38" fontSize="20">📰</text>
              <text x="26" y="38" fontSize="20">🎨</text>
              <text x="56" y="38" fontSize="12" fontWeight="bold" fill="#ca8a04">Papel Maché & Murales</text>
            </g>

            <g transform="translate(740, 80)">
              <text x="0" y="38" fontSize="20">📒</text>
              <text x="26" y="38" fontSize="20">📦</text>
              <text x="56" y="38" fontSize="12" fontWeight="bold" fill="#854d0e">Libretas & Cajas 2do Uso</text>
            </g>
          </svg>
        </div>

        {/* Buscador & Filtros React */}
        <div className="filter-search-container">
          <div className="search-input-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Buscar proyecto, material o residuo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button className="clear-search-btn" onClick={() => setSearchTerm('')}>✕</button>
            )}
          </div>

          <div className="filter-bar">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => {
                  playPop();
                  setActiveCategory(cat.id);
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Contador de resultados */}
        <div className="results-count-bar">
          Mostrando <strong>{filteredAcciones.length}</strong> de {ACCIONES.length} proyectos de valorización
        </div>

        {/* Grilla de Acciones */}
        <div className="actions-grid">
          {filteredAcciones.map((act) => (
            <div 
              key={act.id} 
              className={`action-card ${act.id === 'compost_papel' ? 'featured' : ''}`}
            >
              <div className={`card-art-banner banner-${act.id}`}>
                {/* Visual Art SVG Render per Action */}
                {act.id === 'macetas' && (
                  <svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="gradMacetas" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fef9c3" /><stop offset="50%" stopColor="#ccfbf1" /><stop offset="100%" stopColor="#bbf7d0" />
                      </linearGradient>
                    </defs>
                    <rect width="320" height="140" rx="14" fill="url(#gradMacetas)" />
                    <circle cx="280" cy="30" r="22" fill="#fef08a" opacity="0.8" />
                    <circle cx="280" cy="30" r="14" fill="#facc15" />
                    <rect x="125" y="65" width="70" height="60" rx="10" fill="#a5f3fc" stroke="#0d9488" strokeWidth="2.5" />
                    <rect x="128" y="95" width="64" height="27" rx="6" fill="#38bdf8" opacity="0.6" />
                    <path d="M127 40 L193 40 L168 85 L152 85 Z" fill="#854d0e" stroke="#0d9488" strokeWidth="2.5" />
                    <rect x="153" y="85" width="14" height="8" fill="#14b8a6" />
                    <path d="M160 55 L160 115" stroke="#fef08a" strokeWidth="4" strokeLinecap="round" />
                    <path d="M160 40 Q145 15 130 20 Q145 35 160 40 Q175 15 190 20 Q175 35 160 40 Z" fill="#22c55e" />
                    <path d="M160 30 Q160 10 160 8" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="160" cy="8" r="6" fill="#facc15" />
                  </svg>
                )}

                {act.id === 'ecoladrillos' && (
                  <svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="gradEco" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ccfbf1" /><stop offset="50%" stopColor="#fef9c3" /><stop offset="100%" stopColor="#bbf7d0" />
                      </linearGradient>
                    </defs>
                    <rect width="320" height="140" rx="14" fill="url(#gradEco)" />
                    <rect x="25" y="90" width="55" height="22" rx="4" fill="#a7f3d0" stroke="#059669" strokeWidth="2" />
                    <rect x="85" y="90" width="55" height="22" rx="4" fill="#fde68a" stroke="#d97706" strokeWidth="2" />
                    <g transform="translate(70, 30)">
                      <rect x="20" y="10" width="130" height="48" rx="12" fill="#ffffff" stroke="#0d9488" strokeWidth="3" />
                      <path d="M25 15 Q40 25 30 50 Q22 40 25 15 Z" fill="#f43f5e" />
                      <path d="M45 15 Q60 30 50 50 Q38 40 45 15 Z" fill="#3b82f6" />
                      <path d="M68 15 Q80 28 72 50 Q58 38 68 15 Z" fill="#facc15" />
                      <path d="M90 15 Q105 32 95 50 Q80 40 90 15 Z" fill="#10b981" />
                      <path d="M112 15 Q125 25 120 50 Q105 35 112 15 Z" fill="#ec4899" />
                      <path d="M150 20 L168 24 L168 44 L150 48 Z" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2" />
                      <rect x="168" y="22" width="10" height="24" rx="3" fill="#14b8a6" />
                      <line x1="0" y1="65" x2="185" y2="-5" stroke="#b45309" strokeWidth="6" strokeLinecap="round" />
                    </g>
                    <path d="M10 130 Q30 115 50 130 Q70 115 90 130 Q110 115 130 130 Q150 115 170 130 Q190 115 210 130" fill="#22c55e" />
                  </svg>
                )}

                {act.id === 'manualidades_botellas' && (
                  <svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="gradMan" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#bbf7d0" /><stop offset="50%" stopColor="#ccfbf1" /><stop offset="100%" stopColor="#fef9c3" />
                      </linearGradient>
                    </defs>
                    <rect width="320" height="140" rx="14" fill="url(#gradMan)" />
                    <g transform="translate(60, 20)">
                      <rect x="25" y="35" width="55" height="65" rx="10" fill="#fef08a" stroke="#ca8a04" strokeWidth="2.5" />
                      <polygon points="30,35 40,15 48,35" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
                      <polygon points="57,35 65,15 75,35" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
                      <circle cx="43" cy="50" r="3" fill="#1f2937" />
                      <circle cx="62" cy="50" r="3" fill="#1f2937" />
                      <polygon points="53,55 50,60 56,60" fill="#f43f5e" />
                      <rect x="95" y="25" width="60" height="75" rx="12" fill="#5eead4" stroke="#0f766e" strokeWidth="2.5" />
                      <line x1="110" y1="3" x2="110" y2="30" stroke="#f97316" strokeWidth="6" />
                      <polygon points="107,3 113,3 110,-4" fill="#fef08a" />
                      <line x1="125" y1="8" x2="125" y2="30" stroke="#3b82f6" strokeWidth="6" />
                      <circle cx="102" cy="-6" r="6" fill="none" stroke="#ef4444" strokeWidth="2.5" />
                      <circle cx="114" cy="-6" r="6" fill="none" stroke="#ef4444" strokeWidth="2.5" />
                    </g>
                  </svg>
                )}

                {act.id === 'compost_papel' && (
                  <svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="gradComp" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fef9c3" /><stop offset="50%" stopColor="#dcfce7" /><stop offset="100%" stopColor="#ccfbf1" />
                      </linearGradient>
                    </defs>
                    <rect width="320" height="140" rx="14" fill="url(#gradComp)" />
                    <rect x="80" y="35" width="160" height="85" rx="8" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
                    <rect x="85" y="45" width="150" height="20" fill="#a16207" opacity="0.85" />
                    <text x="95" y="59" fontSize="11" fill="#fef9c3" fontWeight="bold">📄 Servilletas (Carbono)</text>
                    <rect x="85" y="68" width="150" height="20" fill="#22c55e" opacity="0.85" />
                    <text x="95" y="82" fontSize="11" fill="#ffffff" fontWeight="bold">🍎 Restos de Fruta (Nitrógeno)</text>
                    <rect x="85" y="91" width="150" height="22" fill="#451a03" />
                    <text x="95" y="106" fontSize="11" fill="#facc15" fontWeight="bold">🌱 Tierra Fértil / Humus</text>
                    <g transform="translate(245, 55)">
                      <path d="M0 40 Q15 20 25 35 Q35 50 45 30" stroke="#f472b6" strokeWidth="8" fill="none" strokeLinecap="round" />
                      <circle cx="45" cy="28" r="7" fill="#f472b6" />
                    </g>
                  </svg>
                )}

                {act.id === 'papel_mache' && (
                  <svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="gradMache" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ccfbf1" /><stop offset="50%" stopColor="#bbf7d0" /><stop offset="100%" stopColor="#fef9c3" />
                      </linearGradient>
                    </defs>
                    <rect width="320" height="140" rx="14" fill="url(#gradMache)" />
                    <g transform="translate(60, 25)">
                      <polygon points="30,85 100,20 170,85" fill="#84cc16" stroke="#4d7c0f" strokeWidth="2" />
                      <polygon points="100,20 85,45 115,45" fill="#ffffff" opacity="0.9" />
                      <path d="M45 70 Q100 55 155 70 L165 85 L35 85 Z" fill="#92400e" />
                      <rect x="175" y="25" width="45" height="16" rx="2" fill="#ffffff" stroke="#94a3b8" transform="rotate(15 175 25)" />
                      <line x1="5" y1="20" x2="45" y2="55" stroke="#ca8a04" strokeWidth="6" strokeLinecap="round" />
                      <polygon points="45,55 52,62 42,65" fill="#0d9488" />
                    </g>
                  </svg>
                )}

                {act.id === 'murales_revistas' && (
                  <svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="gradMur" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fef9c3" /><stop offset="50%" stopColor="#ccfbf1" /><stop offset="100%" stopColor="#fef08a" />
                      </linearGradient>
                    </defs>
                    <rect width="320" height="140" rx="14" fill="url(#gradMur)" />
                    <g transform="translate(65, 15)">
                      <rect x="0" y="0" width="190" height="110" rx="10" fill="#ffffff" stroke="#14b8a6" strokeWidth="3" />
                      <polygon points="150,15 165,18 175,30 170,45 155,42 145,30" fill="#facc15" />
                      <rect x="90" y="55" width="14" height="45" fill="#854d0e" />
                      <polygon points="97,15 75,35 90,38 70,55 124,55 104,38 119,35" fill="#22c55e" />
                      <rect x="5" y="95" width="180" height="10" fill="#10b981" />
                    </g>
                  </svg>
                )}

                {act.id === 'libretas_artesanales' && (
                  <svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="gradLib" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#dcfce7" /><stop offset="50%" stopColor="#fef9c3" /><stop offset="100%" stopColor="#ccfbf1" />
                      </linearGradient>
                    </defs>
                    <rect width="320" height="140" rx="14" fill="url(#gradLib)" />
                    <g transform="translate(90, 18)">
                      <rect x="22" y="10" width="115" height="90" rx="8" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
                      <rect x="18" y="14" width="115" height="86" rx="6" fill="#ffffff" stroke="#cbd5e1" />
                      <rect x="15" y="15" width="115" height="85" rx="8" fill="#99f6e4" stroke="#0d9488" strokeWidth="2.5" />
                      <line x1="30" y1="15" x2="30" y2="100" stroke="#047857" strokeWidth="3" />
                      <rect x="52" y="38" width="58" height="38" rx="6" fill="#ffffff" stroke="#0d9488" strokeWidth="1.5" />
                      <text x="60" y="55" fontSize="10" fill="#0f766e" fontWeight="bold">EcoNotas</text>
                    </g>
                  </svg>
                )}

                {act.id === 'cajas_segundo_uso' && (
                  <svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="gradCaj" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fef9c3" /><stop offset="50%" stopColor="#ccfbf1" /><stop offset="100%" stopColor="#dcfce7" />
                      </linearGradient>
                    </defs>
                    <rect width="320" height="140" rx="14" fill="url(#gradCaj)" />
                    <g transform="translate(100, 20)">
                      <polygon points="60,25 115,50 60,75 5,50" fill="#fef08a" stroke="#ca8a04" strokeWidth="2.5" />
                      <polygon points="5,50 60,75 60,105 5,80" fill="#fde047" stroke="#ca8a04" strokeWidth="2.5" />
                      <polygon points="60,75 115,50 115,80 60,105" fill="#eab308" stroke="#ca8a04" strokeWidth="2.5" />
                      <polygon points="120,55 155,70 120,85 85,70" fill="#5eead4" stroke="#0d9488" strokeWidth="2" />
                    </g>
                  </svg>
                )}
              </div>

              <div className="action-icon-header">
                <span className="action-emoji">{act.emoji}</span>
                <span className={`action-cat-pill ${act.category}`}>{act.catLabel}</span>
                <button
                  className={`btn-like-heart ${likedCards[act.id] ? 'liked' : ''}`}
                  onClick={(e) => handleLike(act.id, e)}
                  title="Me interesa este proyecto"
                  aria-label="Votar"
                >
                  {likedCards[act.id] ? '❤️' : '🤍'}
                </button>
              </div>

              <h3 className="action-name">{act.name}</h3>

              <div className="action-meta-bar">
                <span>⏱️ {act.time}</span>
                <span>🎯 {act.difficulty}</span>
              </div>

              <p className="action-summary">{act.summary}</p>

              <div className="action-card-footer">
                <div className="action-buttons-group">
                  <button 
                    className="btn-paso-a-paso pulse-hover" 
                    onClick={() => {
                      playSuccess();
                      onSelectAccion(act);
                    }}
                  >
                    <span>Pasos a seguir</span> ➔
                  </button>
                  <a
                    href={act.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-card-video"
                    title={`Ver video de referencia: ${act.videoTitle}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      playPop();
                    }}
                  >
                    <span>🎥</span> Video
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

