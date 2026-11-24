import React, { useState } from 'react';
import { playPop, playCelebration } from '../utils/audio';

export default function EcoBrigadas() {
  const [checklist, setChecklist] = useState([
    { id: 1, text: 'Tachos en puntos clave vaciados y limpios antes del primer recreo.', checked: true },
    { id: 2, text: 'Canastas de botellas PET disponibles junto a los quioscos escolares.', checked: true },
    { id: 3, text: 'Servilletas usadas separadas sin restos plásticos para la trituradora manual.', checked: true },
    { id: 4, text: 'Riego por capilaridad verificado en el huerto vertical de botellas PET.', checked: false },
    { id: 5, text: 'Oxigenación y volteo periódico de la mezcla de compostera escolar.', checked: false }
  ]);

  const toggleCheck = (id) => {
    playPop();
    const updated = checklist.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setChecklist(updated);

    const allChecked = updated.every(item => item.checked);
    if (allChecked) {
      playCelebration();
    }
  };

  const checkedCount = checklist.filter(item => item.checked).length;
  const progressPercent = Math.round((checkedCount / checklist.length) * 100);

  return (
    <section id="brigadas" className="section container">
      <div className="section-wrapper-card">
        <div className="section-header">
          <div className="section-tag">Participación Activa</div>
          <h2 className="section-title">👥 Las Eco-Brigadas del Recreo: Roles de Acción</h2>
          <p className="section-subtitle">
            Para que el prototipo funcione en la práctica cotidiana, los estudiantes asumen roles de liderazgo durante las horas de recreo en los patios.
          </p>
        </div>

        {/* Banner Ilustrado de las Eco-Brigadas */}
        <div className="section-art-banner banner-brigades-art">
          <svg viewBox="0 0 960 150" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="brigBannerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ccfbf1" />
                <stop offset="50%" stopColor="#dcfce7" />
                <stop offset="100%" stopColor="#fef9c3" />
              </linearGradient>
            </defs>
            <rect width="960" height="150" rx="12" fill="url(#brigBannerGrad)" />

            <g transform="translate(60, 20)">
              <rect width="260" height="110" rx="10" fill="#ffffff" stroke="#14b8a6" strokeWidth="2" opacity="0.95" />
              <text x="40" y="55" fontSize="28">🛡️</text>
              <text x="80" y="42" fontSize="12" fontWeight="bold" fill="#0f766e">GUARDIANES DE ISLAS</text>
              <text x="80" y="62" fontSize="10" fill="#1e523f">Vigilan kiosco y graderías</text>
              <text x="80" y="80" fontSize="10" fill="#1e523f">Orientación en recreos</text>
              <rect x="80" y="88" width="110" height="14" rx="3" fill="#ccfbf1" />
              <text x="135" y="99" fontSize="9" fontWeight="bold" fill="#0d9488" textAnchor="middle">Puntos Clave</text>
            </g>

            <g transform="translate(350, 20)">
              <rect width="260" height="110" rx="10" fill="#ffffff" stroke="#22c55e" strokeWidth="2" opacity="0.95" />
              <text x="40" y="55" fontSize="28">🛠️</text>
              <text x="80" y="42" fontSize="12" fontWeight="bold" fill="#15803d">MAESTROS CREADORES</text>
              <text x="80" y="62" fontSize="10" fill="#1e523f">Cortan botellas y arman</text>
              <text x="80" y="80" fontSize="10" fill="#1e523f">Macetas, libretas y cajas</text>
              <rect x="80" y="88" width="110" height="14" rx="3" fill="#dcfce7" />
              <text x="135" y="99" fontSize="9" fontWeight="bold" fill="#15803d" textAnchor="middle">Taller de Reciclaje</text>
            </g>

            <g transform="translate(640, 20)">
              <rect width="260" height="110" rx="10" fill="#ffffff" stroke="#ca8a04" strokeWidth="2" opacity="0.95" />
              <text x="40" y="55" fontSize="28">🍂</text>
              <text x="80" y="42" fontSize="12" fontWeight="bold" fill="#854d0e">MAESTROS COMPOST</text>
              <text x="80" y="62" fontSize="10" fill="#1e523f">Controlan servilletas y frutas</text>
              <text x="80" y="80" fontSize="10" fill="#1e523f">Riegan huerto vertical</text>
              <rect x="80" y="88" width="110" height="14" rx="3" fill="#fef9c3" />
              <text x="135" y="99" fontSize="9" fontWeight="bold" fill="#ca8a04" textAnchor="middle">Suelo & Compostera</text>
            </g>
          </svg>
        </div>

        {/* Brigades Cards Grid */}
        <div className="brigades-grid">
          <div className="brigade-card animate-hover-lift">
            <div className="brigade-badge">Patrulla de Puntos Clave</div>
            <h3>🛡️ Guardianes de las Islas Ecológicas</h3>
            <p>
              Estudiantes ubicados cerca del kiosco y graderías que orientan amablemente a sus compañeros a depositar servilletas en el tacho marrón y botellas en el tacho verde.
            </p>
            <span className="brigade-time">⏰ Horario: Primeros 10 min de recreo</span>
          </div>

          <div className="brigade-card animate-hover-lift">
            <div className="brigade-badge">Equipo de Manufactura</div>
            <h3>🛠️ Maestros Creadores (PET & Papel)</h3>
            <p>
              Encargados de clasificar botellas por tamaño, cortar y lijar para el taller de macetas, y triturar los papeles y periódicos para el engrudo de papel maché y libretas.
            </p>
            <span className="brigade-time">⏰ Horario: Talleres extracurriculares</span>
          </div>

          <div className="brigade-card animate-hover-lift">
            <div className="brigade-badge">Equipo de Regeneración</div>
            <h3>🍂 Maestros de la Compostera</h3>
            <p>
              Supervisan el triturado de servilletas de lonchera, controlan la humedad del tanque de abono y aplican el compost maduro en los jardines y macetas del patio.
            </p>
            <span className="brigade-time">⏰ Horario: 2 veces por semana</span>
          </div>
        </div>

        {/* Lista de Verificación Diaria Reactiva */}
        <div className="checklist-container">
          <div className="checklist-header-row">
            <div>
              <h3>📋 Lista de Verificación del Patio Limpio</h3>
              <p className="checklist-sub">Marca las tareas cumplidas durante la jornada escolar de hoy:</p>
            </div>
            <div className="health-gauge">
              <span className="gauge-label">Salud del Patio:</span>
              <strong className={`gauge-val ${progressPercent === 100 ? 'perfect' : ''}`}>
                {progressPercent}%
              </strong>
            </div>
          </div>

          {/* Barra de progreso de la brigada */}
          <div className="brigade-progress-track">
            <div
              className={`brigade-progress-fill ${progressPercent === 100 ? 'complete' : ''}`}
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>

          <div className="checklist-items">
            {checklist.map((item) => (
              <label 
                key={item.id} 
                className={`check-item ${item.checked ? 'is-checked' : ''}`}
              >
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => toggleCheck(item.id)}
                />
                <span>{item.text}</span>
              </label>
            ))}
          </div>

          {progressPercent === 100 && (
            <div className="celebration-full-checklist animate-scale-in">
              🎉 <strong>¡Misión Cumplida!</strong> Todas las labores de protección del patio escolar han sido completadas. El suelo está libre de microplásticos y la compostera activa.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
