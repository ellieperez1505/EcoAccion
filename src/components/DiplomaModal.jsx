import React, { useState } from 'react';
import { playPop } from '../utils/audio';

export default function DiplomaModal({ isOpen, onClose, metrics, numStudents }) {
  const [schoolName, setSchoolName] = useState('Institución Educativa EcoAcción');

  if (!isOpen) return null;

  return (
    <div className="modal-overlay animate-fade-in" onClick={onClose}>
      <div className="diploma-modal-card animate-scale-in" onClick={e => e.stopPropagation()}>
        <div className="diploma-header-bar">
          <span>📜 Certificado de Compromiso Ambiental Escolar</span>
          <button className="btn-close-modal" onClick={onClose}>✕</button>
        </div>

        <div className="diploma-editor-row">
          <label htmlFor="schoolNameInput">Nombre de tu Colegio / Institución:</label>
          <input
            id="schoolNameInput"
            type="text"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
            className="diploma-input"
          />
        </div>

        {/* Printable Diploma Certificate Canvas/Card */}
        <div className="printable-diploma">
          <div className="diploma-inner-border">
            <div className="diploma-crest">🌱 🛡️ ♻️</div>
            <h2 className="diploma-title">CERTIFICADO DE IMPACTO AMBIENTAL</h2>
            <p className="diploma-grant">Otorgado con honor a la comunidad de:</p>
            <h3 className="diploma-school-name">{schoolName || 'Institución Educativa'}</h3>
            <p className="diploma-text">
              Por su destacado compromiso en la implementación del prototipo <strong>EcoAcción</strong>,
              liderando la segregación de residuos en puntos clave, el compostaje de papel sucio y la regeneración
              del suelo del patio escolar con una comunidad de <strong>{numStudents} estudiantes</strong>.
            </p>

            <div className="diploma-metrics-grid">
              <div className="dip-metric">
                <span className="dip-num">{metrics.botellas.toLocaleString()}</span>
                <span className="dip-label">Botellas PET salvadas/mes</span>
              </div>
              <div className="dip-metric">
                <span className="dip-num">{metrics.compost.toLocaleString()} kg</span>
                <span className="dip-label">Abono orgánico generado/mes</span>
              </div>
              <div className="dip-metric">
                <span className="dip-num">{metrics.suelo.toLocaleString()} m²</span>
                <span className="dip-label">Suelo de patio protegido</span>
              </div>
              <div className="dip-metric">
                <span className="dip-num">{metrics.ecoladrillos.toLocaleString()}</span>
                <span className="dip-label">Ecoladrillos producidos</span>
              </div>
            </div>

            <div className="diploma-signatures">
              <div className="signature-box">
                <div className="signature-line"></div>
                <span>Coordinación de Eco-Brigadas</span>
              </div>
              <div className="signature-stamp">
                <div className="stamp-circle">
                  <span>ECOACCIÓN</span>
                  <span>PATIO LIMPIO</span>
                  <span>2026</span>
                </div>
              </div>
              <div className="signature-box">
                <div className="signature-line"></div>
                <span>Dirección de Innovación Escolar</span>
              </div>
            </div>
          </div>
        </div>

        <div className="diploma-actions">
          <button 
            className="btn-hero-primary"
            onClick={() => {
              playPop();
              window.print();
            }}
          >
            🖨️ Imprimir Diploma Escolar (PDF)
          </button>
          <button className="btn-modal-prev" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

