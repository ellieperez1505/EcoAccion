import React, { useState } from 'react';
import { TACHOS_INFO } from '../data/ecoData';
import { playPop, playSuccess } from '../utils/audio';

export default function PuntosClave() {
  const [selectedTacho, setSelectedTacho] = useState(null);
  const [quickTestItem, setQuickTestItem] = useState(null);

  const testItems = [
    { label: '🍾 Botella de gaseosa vacía', tachoId: 'verde', explanation: '¡Al tacho verde! Es plástico PET limpio que se transformará en macetas autorregantes.' },
    { label: '🧻 Servilleta con grasa de empanada', tachoId: 'marron', explanation: '¡Al tacho marrón! Aporta carbono esencial que equilibra la humedad en la compostera escolar.' },
    { label: '🍟 Bolsa metalizada de galletas', tachoId: 'negro', explanation: '¡Al tacho negro! Los empaques con foil de aluminio van a rechazo o ecoladrillo si están limpios.' },
    { label: '🍌 Cáscara de plátano', tachoId: 'marron', explanation: '¡Al tacho marrón! Materia orgánica húmeda con nitrógeno para alimentar las lombrices.' },
    { label: '📄 Hoja de cuaderno usada', tachoId: 'verde', explanation: '¡Al tacho verde! Papel seco para reciclar o confeccionar libretas artesanales.' }
  ];

  const handleTestClick = (item) => {
    playSuccess();
    setQuickTestItem(item);
    setSelectedTacho(item.tachoId);
  };

  return (
    <section id="puntos-clave" className="section container">
      <div className="section-wrapper-card">
        <div className="section-header">
          <div className="section-tag">Segregación en Origen</div>
          <h2 className="section-title">📍 Tachos en Puntos Clave del Patio Escolar</h2>
          <p className="section-subtitle">
            Instalación de estaciones ecológicas en los lugares de mayor afluencia durante el recreo (kiosco escolar, graderías deportivas y zonas de sombra) para clasificar los residuos antes de que toquen y degraden el suelo.
          </p>
        </div>

        {/* Banner Ilustrado de la Red de Puntos Clave en el Patio */}
        <div className="section-art-banner banner-tachos-patio">
          <svg viewBox="0 0 960 170" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="patioMapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fefce8" />
                <stop offset="50%" stopColor="#ccfbf1" />
                <stop offset="100%" stopColor="#dcfce7" />
              </linearGradient>
            </defs>
            <rect width="960" height="170" rx="12" fill="url(#patioMapGrad)" />

            {/* Zona 1: Kiosco Escolar */}
            <g transform="translate(60, 25)">
              <rect width="240" height="120" rx="10" fill="#ffffff" stroke="#14b8a6" strokeWidth="2" opacity="0.95" />
              <rect x="15" y="15" width="210" height="26" rx="6" fill="#ccfbf1" />
              <text x="120" y="33" fontSize="13" fontWeight="bold" fill="#0f766e" textAnchor="middle">🏪 1. KIOSCO DE REFRIGERIOS</text>
              <text x="120" y="62" fontSize="11" fill="#1e523f" textAnchor="middle">Zona de compra de bebidas y loncheras</text>
              <text x="120" y="80" fontSize="11" fontWeight="bold" fill="#ca8a04" textAnchor="middle">Foco: Botellas PET y servilletas grasosas</text>
              <rect x="25" y="94" width="190" height="18" rx="4" fill="#fef9c3" />
              <text x="120" y="107" fontSize="10" fontWeight="bold" fill="#854d0e" textAnchor="middle">📍 Tacho Verde y Tacho Marrón al paso</text>
            </g>

            {/* Flecha conectora 1 a 2 */}
            <path d="M305 85 L355 85" stroke="#14b8a6" strokeWidth="3" strokeDasharray="6,4" />
            <polygon points="355,80 365,85 355,90" fill="#14b8a6" />

            {/* Zona 2: Graderías y Canchas */}
            <g transform="translate(370, 25)">
              <rect width="240" height="120" rx="10" fill="#ffffff" stroke="#22c55e" strokeWidth="2" opacity="0.95" />
              <rect x="15" y="15" width="210" height="26" rx="6" fill="#dcfce7" />
              <text x="120" y="33" fontSize="13" fontWeight="bold" fill="#15803d" textAnchor="middle">🏟️ 2. GRADERÍAS & CANCHAS</text>
              <text x="120" y="62" fontSize="11" fill="#1e523f" textAnchor="middle">Zona de consumo durante el recreo</text>
              <text x="120" y="80" fontSize="11" fontWeight="bold" fill="#16a34a" textAnchor="middle">Foco: Envases plásticos y papeles secos</text>
              <rect x="25" y="94" width="190" height="18" rx="4" fill="#f0fdf4" />
              <text x="120" y="107" fontSize="10" fontWeight="bold" fill="#15803d" textAnchor="middle">📍 Batería Tri-Color en accesos</text>
            </g>

            {/* Flecha conectora 2 a 3 */}
            <path d="M615 85 L665 85" stroke="#22c55e" strokeWidth="3" strokeDasharray="6,4" />
            <polygon points="665,80 675,85 665,90" fill="#22c55e" />

            {/* Zona 3: Zonas de Sombra y Jardines */}
            <g transform="translate(680, 25)">
              <rect width="240" height="120" rx="10" fill="#ffffff" stroke="#ca8a04" strokeWidth="2" opacity="0.95" />
              <rect x="15" y="15" width="210" height="26" rx="6" fill="#fef9c3" />
              <text x="120" y="33" fontSize="13" fontWeight="bold" fill="#854d0e" textAnchor="middle">🌳 3. ZONAS DE SOMBRA</text>
              <text x="120" y="62" fontSize="11" fill="#1e523f" textAnchor="middle">Bancas y descanso de estudiantes</text>
              <text x="120" y="80" fontSize="11" fontWeight="bold" fill="#ca8a04" textAnchor="middle">Foco: Frutas, restos orgánicos y papel</text>
              <rect x="25" y="94" width="190" height="18" rx="4" fill="#fffbeb" />
              <text x="120" y="107" fontSize="10" fontWeight="bold" fill="#a16207" textAnchor="middle">📍 Tacho Marrón prioritario</text>
            </g>
          </svg>
        </div>

        {/* Simulador Rápido: ¿A qué tacho va este residuo? */}
        <div className="quick-sorter-box">
          <div className="sorter-title">
            <span>✨ Prueba Rápida Escolar:</span> Haz clic en un residuo común del recreo para ver su tacho correspondiente:
          </div>
          <div className="sorter-chips">
            {testItems.map((item, index) => (
              <button
                key={index}
                className={`sorter-chip ${quickTestItem?.label === item.label ? 'active' : ''}`}
                onClick={() => handleTestClick(item)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {quickTestItem && (
            <div className="sorter-result-banner animate-fade-in">
              <span className="sorter-result-icon">
                {quickTestItem.tachoId === 'verde' ? '🟢' : quickTestItem.tachoId === 'marron' ? '🟤' : '⚫'}
              </span>
              <div>
                <strong>{quickTestItem.label}:</strong> {quickTestItem.explanation}
              </div>
            </div>
          )}
        </div>

        {/* Guía de los Tachos en Puntos Clave */}
        <div className="tachos-grid">
          {TACHOS_INFO.map((tacho) => (
            <div
              key={tacho.id}
              className={`tacho-card tacho-${tacho.id} ${selectedTacho === tacho.id ? 'highlight-active-card' : ''}`}
              onClick={() => {
                playPop();
                setSelectedTacho(tacho.id);
              }}
            >
              <div className="tacho-art-box">
                {tacho.id === 'verde' && (
                  <svg viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg">
                    <rect width="280" height="110" fill="#f0fdf4" />
                    <rect x="40" y="25" width="30" height="65" rx="6" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" />
                    <rect x="48" y="15" width="14" height="10" fill="#0284c7" />
                    <text x="55" y="60" fontSize="12" fill="#0284c7" fontWeight="bold" textAnchor="middle">PET</text>
                    <rect x="90" y="35" width="25" height="55" rx="5" fill="#a7f3d0" stroke="#059669" strokeWidth="2" />
                    <circle cx="145" cy="50" r="16" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
                    <text x="145" y="55" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">♻️</text>
                    <rect x="180" y="30" width="55" height="60" rx="4" fill="#ffffff" stroke="#16a34a" strokeWidth="2" />
                    <line x1="190" y1="45" x2="225" y2="45" stroke="#bbf7d0" strokeWidth="2" />
                    <line x1="190" y1="58" x2="225" y2="58" stroke="#bbf7d0" strokeWidth="2" />
                    <text x="207" y="75" fontSize="10" fontWeight="bold" fill="#15803d" textAnchor="middle">PAPEL SECO</text>
                  </svg>
                )}

                {tacho.id === 'marron' && (
                  <svg viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg">
                    <rect width="280" height="110" fill="#fefce8" />
                    <path d="M35 70 Q45 40 70 45 Q85 55 80 80 Q60 85 35 70 Z" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
                    <text x="60" y="65" fontSize="9" fontWeight="bold" fill="#854d0e" textAnchor="middle">SERVILLETAS</text>
                    <circle cx="130" cy="60" r="22" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
                    <path d="M130 38 Q135 25 142 30" stroke="#78350f" strokeWidth="3" fill="none" />
                    <path d="M140 28 Q150 25 148 35 Z" fill="#22c55e" />
                    <path d="M185 75 Q210 35 245 45 Q215 55 195 85 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
                    <text x="215" y="98" fontSize="10" fontWeight="bold" fill="#854d0e" textAnchor="middle">ORGÁNICO C:N</text>
                  </svg>
                )}

                {tacho.id === 'negro' && (
                  <svg viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg">
                    <rect width="280" height="110" fill="#f1f5f9" />
                    <polygon points="40,30 90,25 85,85 35,80" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
                    <text x="62" y="58" fontSize="10" fontWeight="bold" fill="#0f172a" textAnchor="middle">SNACKS</text>
                    <polygon points="120,40 160,35 155,75 115,70" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />
                    <rect x="190" y="45" width="45" height="30" rx="4" fill="#e2e8f0" stroke="#475569" strokeWidth="1.5" />
                    <text x="212" y="64" fontSize="9" fontWeight="bold" fill="#334155" textAnchor="middle">CHICLES</text>
                    <text x="140" y="98" fontSize="10" fontWeight="bold" fill="#475569" textAnchor="middle">RECHAZO COMÚN</text>
                  </svg>
                )}
              </div>

              <div className="tacho-header">
                <span className="tacho-bullet">{tacho.bullet}</span>
                <h4>{tacho.name}</h4>
              </div>

              <p className="tacho-ubication">
                <strong>Ubicación clave:</strong> {tacho.ubicacion}
              </p>

              <div className="tacho-items-list">
                <strong>Residuos admitidos:</strong>
                <ul>
                  {tacho.items.map((it, i) => (
                    <li key={i}>{it}</li>
                  ))}
                </ul>
              </div>

              <span className="tacho-destiny">Destino: {tacho.destino}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

