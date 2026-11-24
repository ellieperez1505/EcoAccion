import React, { useState } from 'react';
import { BG_PRESETS } from '../data/ecoData';
import { playPop } from '../utils/audio';

export default function BackgroundSwitcher({ activeBg, onSelectBg }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-switcher-floating">
      <button
        className="btn-bg-switcher-toggle pulse-hover"
        onClick={() => {
          playPop();
          setIsOpen(!isOpen);
        }}
        title="Cambiar fondo fotográfico libre de derechos"
      >
        <span>🖼️</span> Cambiar Fondo
      </button>

      {isOpen && (
        <div className="bg-switcher-dropdown animate-scale-in">
          <div className="bg-switcher-header">
            <strong>📸 Fondos de Naturaleza Libres de Derechos</strong>
            <button className="btn-close-mini" onClick={() => setIsOpen(false)}>✕</button>
          </div>
          <div className="bg-switcher-list">
            {BG_PRESETS.map((preset) => (
              <button
                key={preset.id}
                className={`bg-preset-btn ${activeBg.id === preset.id ? 'active' : ''}`}
                onClick={() => {
                  playPop();
                  onSelectBg(preset);
                  setIsOpen(false);
                }}
              >
                <img src={preset.thumb} alt={preset.name} className="preset-thumb" />
                <div className="preset-info">
                  <span className="preset-name">{preset.name}</span>
                  <span className="preset-desc">{preset.desc}</span>
                </div>
                {activeBg.id === preset.id && <span className="preset-check">✓</span>}
              </button>
            ))}
          </div>
          <span className="bg-source-note">Licencia Unsplash • 100% Libre de Derechos</span>
        </div>
      )}
    </div>
  );
}
