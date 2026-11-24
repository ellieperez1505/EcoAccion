import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PuntosClave from './components/PuntosClave';
import AccionesReciclaje from './components/AccionesReciclaje';
import ComposteraLab from './components/ComposteraLab';
import CalculadoraImpacto from './components/CalculadoraImpacto';
import EcoBrigadas from './components/EcoBrigadas';
import Footer from './components/Footer';
import PasosModal from './components/PasosModal';
import EcoGame from './components/EcoGame';
import FloatingParticles from './components/FloatingParticles';
import BackgroundSwitcher from './components/BackgroundSwitcher';
import { BG_PRESETS } from './data/ecoData';
import './App.css';

export default function App() {
  const [selectedAccion, setSelectedAccion] = useState(null);
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [activeBg, setActiveBg] = useState(BG_PRESETS[0]);

  // Esc keyboard shortcut to close modals
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedAccion(null);
        setIsGameOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="eco-app">
      {/* Royalty-free Photography Background Wallpaper */}
      <div 
        className="app-background-wallpaper"
        style={{ backgroundImage: `url(${activeBg.url})` }}
        aria-hidden="true"
      ></div>
      <div className="app-background-overlay" aria-hidden="true"></div>

      {/* Floating interactive background switcher */}
      <BackgroundSwitcher activeBg={activeBg} onSelectBg={setActiveBg} />

      {/* Organic floating eco-particles */}
      <FloatingParticles />

      {/* Main navigation */}
      <Navbar onOpenGame={() => setIsGameOpen(true)} />

      {/* Hero and main sections */}
      <main className="main-content-layer">
        <Hero onOpenGame={() => setIsGameOpen(true)} />
        <PuntosClave />
        <AccionesReciclaje onSelectAccion={(act) => setSelectedAccion(act)} />
        <ComposteraLab />
        <CalculadoraImpacto />
        <EcoBrigadas />
      </main>

      {/* Footer */}
      <Footer onOpenGame={() => setIsGameOpen(true)} />

      {/* Interactive Step-by-Step Modal */}
      {selectedAccion && (
        <PasosModal
          accion={selectedAccion}
          onClose={() => setSelectedAccion(null)}
        />
      )}

      {/* Interactive Eco-Reciclaje Game Modal */}
      <EcoGame
        isOpen={isGameOpen}
        onClose={() => setIsGameOpen(false)}
      />
    </div>
  );
}
