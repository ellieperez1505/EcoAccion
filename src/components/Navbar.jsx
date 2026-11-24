import React, { useState, useEffect } from 'react';
import { playPop, toggleSound } from '../utils/audio';

export default function Navbar({ onOpenGame }) {
  const [soundOn, setSoundOn] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
    if (newState) playPop();
  };

  const navLinks = [
    { href: '#inicio', label: 'Inicio', id: 'inicio' },
    { href: '#puntos-clave', label: 'Tachos Clave', id: 'puntos-clave' },
    { href: '#soluciones', label: '8 Acciones', id: 'soluciones' },
    { href: '#compostera', label: 'Simulador Compost', id: 'compostera' },
    { href: '#calculadora', label: 'Calculadora', id: 'calculadora' },
    { href: '#brigadas', label: 'Eco-Brigadas', id: 'brigadas' }
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#inicio" className="brand" onClick={() => { playPop(); setActiveNav('inicio'); }}>
          <span className="brand-icon floating-leaf">🌱</span>
          <div>
            <h1 className="brand-title">
              EcoAcción <span className="react-pill-badge">React UI</span>
            </h1>
            <p className="brand-subtitle">Prototipo de Economía Circular & Protección del Suelo</p>
          </div>
        </a>

        {/* Mobile toggle */}
        <button 
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menú"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`nav-item ${activeNav === item.id ? 'active' : ''}`}
              onClick={() => {
                playPop();
                setActiveNav(item.id);
                setMobileMenuOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}

          {/* Botón Minijuego */}
          <button 
            className="btn-game-nav pulse-hover"
            onClick={() => {
              playPop();
              setMobileMenuOpen(false);
              onOpenGame();
            }}
          >
            <span>🎮</span> Desafío Reciclaje
          </button>

          {/* Toggle sonido */}
          <button 
            className="btn-icon-sound"
            onClick={handleSoundToggle}
            title={soundOn ? 'Silenciar efectos' : 'Activar efectos'}
            aria-label="Control de sonido"
          >
            {soundOn ? '🔊' : '🔇'}
          </button>

          {/* Imprimir */}
          <button 
            className="btn-primary-print"
            onClick={() => {
              playPop();
              window.print();
            }}
          >
            <span>🖨️</span> PDF
          </button>
        </nav>
      </div>
    </header>
  );
}
