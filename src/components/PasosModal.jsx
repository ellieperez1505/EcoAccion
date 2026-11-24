import React, { useState } from 'react';
import { playPop, playCelebration } from '../utils/audio';

export default function PasosModal({ accion, onClose }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [checkedMaterials, setCheckedMaterials] = useState({});
  const [completed, setCompleted] = useState(false);

  if (!accion) return null;

  const totalSteps = accion.steps.length;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      playPop();
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      playPop();
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleMaterial = (index) => {
    playPop();
    setCheckedMaterials(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleComplete = () => {
    playCelebration();
    setCompleted(true);
  };

  const progressPercent = Math.round(((currentStep + 1) / totalSteps) * 100);

  return (
    <div className="modal-overlay animate-fade-in" onClick={onClose}>
      <div className="modal-container animate-scale-in" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="modal-emoji">{accion.emoji}</span>
            <div>
              <div className="modal-badges">
                <span className={`modal-cat-pill ${accion.category}`}>{accion.catLabel}</span>
                <span className="modal-time-pill">⏱️ {accion.time}</span>
                <span className="modal-diff-pill">🎯 Dificultad: {accion.difficulty}</span>
              </div>
              <h3 className="modal-title">{accion.name}</h3>
            </div>
          </div>
          <button className="btn-close-modal" onClick={onClose}>✕</button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Barra de Progreso de Pasos */}
          <div className="modal-progress-bar-container">
            <div className="modal-progress-info">
              <span>Paso {currentStep + 1} de {totalSteps}: <strong>{accion.steps[currentStep].title}</strong></span>
              <span className="progress-perc">{progressPercent}%</span>
            </div>
            <div className="modal-progress-track">
              <div 
                className="modal-progress-fill" 
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>

          {/* Stepper Tabs */}
          <div className="modal-step-tabs">
            {accion.steps.map((st, idx) => (
              <button
                key={idx}
                className={`step-tab-btn ${currentStep === idx ? 'active' : ''} ${idx < currentStep ? 'done' : ''}`}
                onClick={() => {
                  playPop();
                  setCurrentStep(idx);
                }}
              >
                <span>{idx < currentStep ? '✓' : idx + 1}</span> {st.title}
              </button>
            ))}
          </div>

          {/* Step Detail Card */}
          <div className="step-card-active">
            <div className="step-icon-num">Paso {currentStep + 1}</div>
            <h4 className="step-heading">{accion.steps[currentStep].title}</h4>
            <p className="step-description">{accion.steps[currentStep].desc}</p>
          </div>

          {/* Checklist de Materiales Interactiva */}
          <div className="materials-box">
            <div className="materials-title">
              <span>🎒 Materiales e Insumos Escolares Requeridos:</span>
              <span className="mat-count">
                {Object.values(checkedMaterials).filter(Boolean).length} / {accion.materials.length} listos
              </span>
            </div>
            <div className="materials-checklist">
              {accion.materials.map((mat, i) => (
                <label key={i} className={`mat-check-item ${checkedMaterials[i] ? 'checked' : ''}`}>
                  <input
                    type="checkbox"
                    checked={!!checkedMaterials[i]}
                    onChange={() => toggleMaterial(i)}
                  />
                  <span>{mat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Tip de Seguridad Escolar */}
          <div className="security-tip-box">
            <span className="tip-icon">🛡️</span>
            <div>
              <strong>Eco-Tip de Seguridad Escolar:</strong> Siempre realiza los cortes de botellas con supervisión de un docente o brigadista y lija las rebabas plásticas para evitar cortes.
            </div>
          </div>

          {completed && (
            <div className="completed-celebration-banner animate-bounce">
              🎉 <strong>¡Proyecto Registrado con Éxito!</strong> Has aprendido la técnica técnica de valorización para <em>{accion.name}</em>. ¡Llévalo a tu aula o patio escolar!
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="modal-footer">
          <button 
            className="btn-modal-prev" 
            onClick={handlePrev} 
            disabled={currentStep === 0}
          >
            ◀ Paso Anterior
          </button>

          <div className="modal-footer-right">
            {!completed ? (
              <button className="btn-modal-next" onClick={handleNext}>
                {currentStep < totalSteps - 1 ? 'Siguiente Paso ▶' : '🏆 Marcar Proyecto Como Completado'}
              </button>
            ) : (
              <button className="btn-modal-done" onClick={onClose}>
                Cerrar Guía ✨
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
