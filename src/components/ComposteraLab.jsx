import React, { useState } from 'react';
import { playSuccess } from '../utils/audio';

export default function ComposteraLab() {
  const [valPapel, setValPapel] = useState(60);
  const [valOrganico, setValOrganico] = useState(40);
  const [isSimulatingHarvest, setIsSimulatingHarvest] = useState(false);
  const [harvestDone, setHarvestDone] = useState(false);

  const handlePapelChange = (e) => {
    const val = parseInt(e.target.value, 10);
    setValPapel(val);
    setValOrganico(100 - val);
    setHarvestDone(false);
  };

  const handleOrganicoChange = (e) => {
    const val = parseInt(e.target.value, 10);
    setValOrganico(val);
    setValPapel(100 - val);
    setHarvestDone(false);
  };

  // Diagnosis logic
  let statusText = 'Equilibrado Óptimo';
  let statusClass = 'status-optimal';
  let diagnosisMsg = '';
  let moisture = Math.round(valOrganico * 1.3);
  let temperature = 55;
  let smellGauge = 'Fresco a bosque 🌲';

  if (valPapel >= 55 && valPapel <= 70) {
    statusText = 'Equilibrado Óptimo (2 C : 1 N)';
    statusClass = 'status-optimal';
    temperature = 58;
    smellGauge = 'Aroma a bosque y tierra mojada 🌲';
    diagnosisMsg = '🎉 ¡Proporción ideal! La celulosa de las servilletas absorbe el exceso de líquido de las frutas y provee canales de oxígeno. Cero malos olores y humus de máxima calidad en 6 a 8 semanas.';
  } else if (valPapel < 55) {
    statusText = 'Exceso de Humedad (Poco Papel)';
    statusClass = 'status-warning';
    temperature = 42;
    smellGauge = 'Riesgo de putrefacción y moscas ⚠️';
    diagnosisMsg = '⚠️ Hay demasiados restos húmedos de fruta y pocas servilletas. La pila se compactará por falta de aire y generará malos olores. Añade más papel troceado o servilletas secas.';
  } else {
    statusText = 'Demasiado Seco (Falta Nitrógeno)';
    statusClass = 'status-dry';
    temperature = 30;
    smellGauge = 'Sin olor, pero descomposición muy lenta ⏳';
    diagnosisMsg = '⏳ Demasiado papel y pocas cáscaras de fruta. Falta humedad para que las bacterias y lombrices se reproduzcan. Añade cáscaras de fruta o humedece ligeramente la mezcla.';
  }

  const triggerFastHarvest = () => {
    playSuccess();
    setIsSimulatingHarvest(true);
    setTimeout(() => {
      setIsSimulatingHarvest(false);
      setHarvestDone(true);
    }, 1800);
  };

  return (
    <section id="compostera" className="section container">
      <div className="section-wrapper-card">
        <div className="section-header">
          <div className="section-tag">Biología & Suelo</div>
          <h2 className="section-title">🧪 El Poder del Papel Sucio en la Compostera Escolar</h2>
          <p className="section-subtitle">
            Muchas personas creen erróneamente que las servilletas sucias y trozos de papel de lonchera son basura inservible. Descubre cómo equilibrar el Carbono y el Nitrógeno para crear humus fértil para el patio.
          </p>
        </div>

        {/* Banner Ilustrado del Ciclo del Compost */}
        <div className="section-art-banner banner-compost-diagram">
          <svg viewBox="0 0 960 170" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="compostDiagGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fefce8" />
                <stop offset="50%" stopColor="#dcfce7" />
                <stop offset="100%" stopColor="#ccfbf1" />
              </linearGradient>
            </defs>
            <rect width="960" height="170" rx="12" fill="url(#compostDiagGrad)" />

            <g transform="translate(50, 20)">
              <rect width="180" height="130" rx="10" fill="#ffffff" stroke="#ca8a04" strokeWidth="2" opacity="0.95" />
              <text x="90" y="38" fontSize="24" textAnchor="middle">📄+🍎</text>
              <text x="90" y="65" fontSize="12" fontWeight="bold" fill="#854d0e" textAnchor="middle">1. RECOLECCIÓN</text>
              <text x="90" y="85" fontSize="10" fill="#1e523f" textAnchor="middle">Servilletas usadas +</text>
              <text x="90" y="100" fontSize="10" fill="#1e523f" textAnchor="middle">Cáscaras de lonchera</text>
              <rect x="25" y="108" width="130" height="14" rx="4" fill="#fef9c3" />
              <text x="90" y="119" fontSize="9" fontWeight="bold" fill="#ca8a04" textAnchor="middle">Tacho Marrón</text>
            </g>

            <path d="M245 85 L285 85" stroke="#ca8a04" strokeWidth="3" strokeDasharray="6,4" />
            <polygon points="285,80 295,85 285,90" fill="#ca8a04" />

            <g transform="translate(300, 20)">
              <rect width="180" height="130" rx="10" fill="#ffffff" stroke="#16a34a" strokeWidth="2" opacity="0.95" />
              <text x="90" y="38" fontSize="24" textAnchor="middle">✂️+⚖️</text>
              <text x="90" y="65" fontSize="12" fontWeight="bold" fill="#15803d" textAnchor="middle">2. TRITURADO & BALANCE</text>
              <text x="90" y="85" fontSize="10" fill="#1e523f" textAnchor="middle">Triturar servilletas</text>
              <text x="90" y="100" fontSize="10" fill="#1e523f" textAnchor="middle">Regla 2 C : 1 N</text>
              <rect x="25" y="108" width="130" height="14" rx="4" fill="#dcfce7" />
              <text x="90" y="119" fontSize="9" fontWeight="bold" fill="#16a34a" textAnchor="middle">60% Papel / 40% Fruta</text>
            </g>

            <path d="M495 85 L535 85" stroke="#16a34a" strokeWidth="3" strokeDasharray="6,4" />
            <polygon points="535,80 545,85 535,90" fill="#16a34a" />

            <g transform="translate(550, 20)">
              <rect width="180" height="130" rx="10" fill="#ffffff" stroke="#0d9488" strokeWidth="2" opacity="0.95" />
              <text x="90" y="38" fontSize="24" textAnchor="middle">🪱+💨</text>
              <text x="90" y="65" fontSize="12" fontWeight="bold" fill="#0f766e" textAnchor="middle">3. BIODESCOMPOSICIÓN</text>
              <text x="90" y="85" fontSize="10" fill="#1e523f" textAnchor="middle">Lombrices & bacterias</text>
              <text x="90" y="100" fontSize="10" fill="#1e523f" textAnchor="middle">Oxigenación sin olores</text>
              <rect x="25" y="108" width="130" height="14" rx="4" fill="#ccfbf1" />
              <text x="90" y="119" fontSize="9" fontWeight="bold" fill="#0d9488" textAnchor="middle">6 a 8 semanas</text>
            </g>

            <path d="M745 85 L785 85" stroke="#0d9488" strokeWidth="3" strokeDasharray="6,4" />
            <polygon points="785,80 795,85 785,90" fill="#0d9488" />

            <g transform="translate(800, 20)">
              <rect width="130" height="130" rx="10" fill="#ffffff" stroke="#22c55e" strokeWidth="2" opacity="0.95" />
              <text x="65" y="38" fontSize="24" textAnchor="middle">🌱</text>
              <text x="65" y="65" fontSize="12" fontWeight="bold" fill="#15803d" textAnchor="middle">4. SUELO VIVO</text>
              <text x="65" y="85" fontSize="10" fill="#1e523f" textAnchor="middle">Humus fértil</text>
              <text x="65" y="100" fontSize="10" fill="#1e523f" textAnchor="middle">Nutre el patio</text>
              <rect x="15" y="108" width="100" height="14" rx="4" fill="#dcfce7" />
              <text x="65" y="119" fontSize="9" fontWeight="bold" fill="#15803d" textAnchor="middle">Regeneración</text>
            </g>
          </svg>
        </div>

        <div className="compost-layout">
          {/* Explicación Técnica */}
          <div className="compost-theory">
            <h3>¿Por qué el papel sucio salva el compostaje?</h3>
            <p>
              Los restos de fruta del recreo (cáscaras de plátano, manzanas, naranjas) son muy húmedos y ricos en <strong>Nitrógeno (N)</strong>. Si se dejan solos, se pudren, desprenden malos olores y atraen moscas al patio.
            </p>
            <p>
              Las <strong>servilletas usadas, papel kraft de envolver y papeles pequeños sin tinta plástica</strong> aportan <strong>Carbono (C) puro</strong>. Al triturarlos:
            </p>
            <ul className="check-list">
              <li><strong>Absorben el exceso de lixiviados (humedad)</strong> de las cáscaras de fruta.</li>
              <li><strong>Generan canales de oxígeno</strong> que evitan los malos olores en la escuela.</li>
              <li><strong>Aceleran la descomposición aeróbica</strong> por lombrices y bacterias benéficas.</li>
              <li><strong>Generan tierra fértil</strong> que se aplica a los jardines erosionados del colegio.</li>
            </ul>

            <div className="formula-box">
              <span className="formula-title">📐 Regla de Oro del Compost Escolar:</span>
              <p className="formula-text"><strong>2 Volúmenes de Papel Triturado (Carbono)</strong> + <strong>1 Volumen de Restos Orgánicos (Nitrógeno)</strong></p>
            </div>
          </div>

          {/* Simulador Interactivo de Mezcla en React */}
          <div className="compost-simulator">
            <div className="sim-header">
              <h4>Simulador Reactivo de Compost Escolar</h4>
              <span className={`sim-status ${statusClass}`}>{statusText}</span>
            </div>

            {/* Sliders React */}
            <div className="slider-group">
              <label htmlFor="rangePapel">
                <span>📄 Servilletas y Papel Sucio (Carbono C):</span>
                <strong className="badge-perc">{valPapel}%</strong>
              </label>
              <input
                type="range"
                id="rangePapel"
                min="10"
                max="90"
                value={valPapel}
                onChange={handlePapelChange}
                className="custom-range range-carbon"
              />
            </div>

            <div className="slider-group">
              <label htmlFor="rangeOrganico">
                <span>🍎 Cáscaras y Restos de Lonchera (Nitrógeno N):</span>
                <strong className="badge-perc">{valOrganico}%</strong>
              </label>
              <input
                type="range"
                id="rangeOrganico"
                min="10"
                max="90"
                value={valOrganico}
                onChange={handleOrganicoChange}
                className="custom-range range-nitrogen"
              />
            </div>

            {/* Indicadores en Tiempo Real */}
            <div className="compost-metrics-row">
              <div className="metric-chip">
                <span>💧 Humedad est.:</span> <strong>{moisture}%</strong>
              </div>
              <div className="metric-chip">
                <span>🌡️ Temperatura:</span> <strong>{temperature}°C</strong>
              </div>
              <div className="metric-chip">
                <span>👃 Olor:</span> <strong>{smellGauge}</strong>
              </div>
            </div>

            {/* Visual Tank Animado */}
            <div className="compost-tank">
              {!harvestDone ? (
                <>
                  <div
                    className="tank-layer layer-carbon"
                    style={{ height: `${valPapel}%` }}
                  >
                    <span>Capa Seca: Servilletas & Papel ({valPapel}%)</span>
                  </div>
                  <div
                    className="tank-layer layer-nitrogen"
                    style={{ height: `${valOrganico}%` }}
                  >
                    <span>Capa Húmeda: Frutas ({valOrganico}%)</span>
                  </div>
                </>
              ) : (
                <div className="tank-layer layer-humus animate-scale-in">
                  <span>✨ 100% Humus Maduro & Tierra Fértil de Patio ✨</span>
                </div>
              )}
            </div>

            <div className="sim-diagnosis">
              {diagnosisMsg}
            </div>

            {/* Botón de Simulación de Cosecha */}
            <div className="sim-action-footer">
              <button
                className={`btn-simulate-harvest ${isSimulatingHarvest ? 'loading' : ''}`}
                onClick={triggerFastHarvest}
                disabled={isSimulatingHarvest}
              >
                {isSimulatingHarvest ? '⏳ Biodescomponiendo 8 semanas...' : harvestDone ? '🔄 Reiniciar Mezcla' : '⏩ Simular Transformación en Humus (8 sem)'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
