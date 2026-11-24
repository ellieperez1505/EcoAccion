import React, { useState } from 'react';
import DiplomaModal from './DiplomaModal';
import { playPop, playSuccess } from '../utils/audio';

export default function CalculadoraImpacto() {
  const [students, setStudents] = useState(450);
  const [showDiploma, setShowDiploma] = useState(false);

  const changeStudents = (delta) => {
    playPop();
    setStudents(prev => Math.max(50, Math.min(5000, prev + delta)));
  };

  const handleInputChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val)) {
      setStudents(Math.max(10, Math.min(10000, val)));
    }
  };

  // Calculations
  const metrics = {
    botellas: Math.round(students * 10),
    ecoladrillos: Math.round(students * 0.333),
    macetas: Math.round(students * 0.266),
    compost: Math.round(students * 0.4),
    libretas: Math.round(students * 0.2),
    suelo: Math.round(students * 0.777),
    co2: Math.round(students * 2.8),
    arboles: (students * 0.12).toFixed(1)
  };

  return (
    <section id="calculadora" className="section container">
      <div className="section-wrapper-card">
        <div className="section-header text-center">
          <div className="section-tag">Medición Cuantitativa</div>
          <h2 className="section-title">📊 Calculadora de Mitigación en el Patio Escolar</h2>
          <p className="section-subtitle">
            Ingresa o ajusta el número de estudiantes de tu centro educativo para estimar el impacto mensual y anual de este prototipo.
          </p>
        </div>

        {/* Banner Ilustrado de Métricas Ecológicas */}
        <div className="section-art-banner banner-calc-metrics">
          <svg viewBox="0 0 960 140" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="calcBannerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef9c3" />
                <stop offset="50%" stopColor="#ccfbf1" />
                <stop offset="100%" stopColor="#dcfce7" />
              </linearGradient>
            </defs>
            <rect width="960" height="140" rx="12" fill="url(#calcBannerGrad)" />
            <g transform="translate(60, 20)">
              <circle cx="50" cy="50" r="38" fill="#ffffff" stroke="#14b8a6" strokeWidth="2" />
              <text x="50" y="60" fontSize="32" textAnchor="middle">🌍</text>
              <text x="110" y="42" fontSize="16" fontWeight="800" fill="#0f766e">Impacto Directo en el Patio Escolar</text>
              <text x="110" y="66" fontSize="12" fill="#1e523f">Cada estudiante cuenta: al separar botellas y servilletas, el suelo deja de degradarse por microplásticos y lixiviados.</text>
            </g>
            <g transform="translate(730, 25)">
              <rect width="180" height="90" rx="8" fill="#ffffff" stroke="#ca8a04" strokeWidth="2" />
              <text x="90" y="32" fontSize="12" fontWeight="bold" fill="#ca8a04" textAnchor="middle">✨ META ANUAL</text>
              <text x="90" y="58" fontSize="20" fontWeight="800" fill="#0d9488" textAnchor="middle">{(metrics.botellas * 12).toLocaleString()} PET</text>
              <text x="90" y="78" fontSize="10" fill="#1e523f" textAnchor="middle">Salvadas del suelo escolar</text>
            </g>
          </svg>
        </div>

        <div className="calc-container">
          <div className="calc-input-box">
            <label htmlFor="numEstudiantes">Número de Estudiantes en el Centro Educativo:</label>
            <div className="input-with-controls">
              <button className="btn-ctrl" onClick={() => changeStudents(-50)}>-50</button>
              <input
                type="number"
                id="numEstudiantes"
                value={students}
                min="50"
                max="5000"
                step="50"
                onChange={handleInputChange}
                className="input-students"
              />
              <button className="btn-ctrl" onClick={() => changeStudents(50)}>+50</button>
            </div>

            {/* Slider de ajuste rápido */}
            <input
              type="range"
              min="50"
              max="2000"
              step="25"
              value={students}
              onChange={handleInputChange}
              className="students-slider"
            />

            <p className="calc-note">
              Estimación basada en un promedio de 1 bebida embotellada cada 2 días y 1.5 servilletas por recreo por alumno.
            </p>

            {/* Diploma Trigger */}
            <div className="diploma-button-wrapper">
              <button
                className="btn-open-diploma pulse-hover"
                onClick={() => {
                  playSuccess();
                  setShowDiploma(true);
                }}
              >
                <span>📜</span> Generar Diploma Escolar de Impacto
              </button>
            </div>
          </div>

          <div className="calc-results-grid">
            <div className="calc-kpi animate-hover-lift">
              <span className="kpi-icon">🍾</span>
              <h3 className="kpi-value">{metrics.botellas.toLocaleString()}</h3>
              <span className="kpi-label">Botellas PET salvadas del suelo al mes</span>
            </div>

            <div className="calc-kpi animate-hover-lift">
              <span className="kpi-icon">🧱</span>
              <h3 className="kpi-value">{metrics.ecoladrillos.toLocaleString()}</h3>
              <span className="kpi-label">Ecoladrillos producidos (Bordean {Math.round(metrics.ecoladrillos * 0.2)}m de jardines)</span>
            </div>

            <div className="calc-kpi animate-hover-lift">
              <span className="kpi-icon">🪴</span>
              <h3 className="kpi-value">{metrics.macetas.toLocaleString()}</h3>
              <span className="kpi-label">Macetas autorregantes para huerto vertical</span>
            </div>

            <div className="calc-kpi animate-hover-lift">
              <span className="kpi-icon">🪱</span>
              <h3 className="kpi-value">{metrics.compost.toLocaleString()} kg</h3>
              <span className="kpi-label">Abono orgánico generado con papel sucio y frutas</span>
            </div>

            <div className="calc-kpi animate-hover-lift">
              <span className="kpi-icon">📒</span>
              <h3 className="kpi-value">{metrics.libretas.toLocaleString()}</h3>
              <span className="kpi-label">Libretas ecológicas con hojas de 2do uso</span>
            </div>

            <div className="calc-kpi animate-hover-lift">
              <span className="kpi-icon">🌱</span>
              <h3 className="kpi-value">{metrics.suelo.toLocaleString()} m²</h3>
              <span className="kpi-label">Suelo de patio protegido de microplásticos</span>
            </div>
          </div>
        </div>

        {/* Equivalencias Ecológicas Adicionales */}
        <div className="equivalencias-row">
          <div className="eq-card">
            <span>🌳</span>
            <p>Equivale a la absorción de carbono de <strong>{metrics.arboles} árboles maduros</strong>.</p>
          </div>
          <div className="eq-card">
            <span>💨</span>
            <p>Se previene la emisión de <strong>{metrics.co2.toLocaleString()} kg de CO₂</strong> al mes en vertederos.</p>
          </div>
          <div className="eq-card">
            <span>💧</span>
            <p>Se ahorran <strong>{Math.round(students * 15).toLocaleString()} litros de agua</strong> con macetas por capilaridad.</p>
          </div>
        </div>
      </div>

      <DiplomaModal
        isOpen={showDiploma}
        onClose={() => setShowDiploma(false)}
        metrics={metrics}
        numStudents={students}
      />
    </section>
  );
}

