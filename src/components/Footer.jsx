import React from 'react';
import { playPop } from '../utils/audio';

export default function Footer({ onOpenGame }) {
  const scrollToTop = () => {
    playPop();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-left">
          <div className="footer-brand">
            <span className="brand-icon">🌱</span>
            <h4>Proyecto: EcoAcción</h4>
          </div>
          <p>
            Prototipo de investigación y acción ambiental escolar para contrarrestar la degradación del suelo en centros educativos mediante economía circular, segregación en origen y valorización en aula.
          </p>
          <div className="footer-badges">
            <span className="footer-tag">♻️ Economía Circular</span>
            <span className="footer-tag">🧪 Balance C:N</span>
            <span className="footer-tag">🏫 Innovación Escolar</span>
          </div>
        </div>

        <div className="footer-links-col">
          <h5>Navegación Rápida</h5>
          <ul>
            <li><a href="#puntos-clave" onClick={playPop}>Tachos en Puntos Clave</a></li>
            <li><a href="#soluciones" onClick={playPop}>8 Acciones de Reciclaje</a></li>
            <li><a href="#compostera" onClick={playPop}>Laboratorio de Compost</a></li>
            <li><a href="#calculadora" onClick={playPop}>Calculadora de Impacto</a></li>
            <li><a href="#brigadas" onClick={playPop}>Eco-Brigadas</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <h5>Herramientas Interactivas</h5>
          <div className="footer-tools-btns">
            <button className="btn-footer-tool" onClick={onOpenGame}>
              🎮 Desafío Reciclaje
            </button>
            <button className="btn-footer-tool" onClick={() => window.print()}>
              🖨️ Imprimir / Guardar PDF
            </button>
            <button className="btn-footer-tool" onClick={scrollToTop}>
              ⬆️ Volver Arriba
            </button>
          </div>
          <p className="footer-program">
            Desarrollado para el Programa Formativo de Innovación y Portafolio Escolar.
          </p>
          <p className="copyright">
            © 2026 Iniciativa Comunitaria de Reciclaje y Regeneración del Suelo.
          </p>
        </div>
      </div>
    </footer>
  );
}

