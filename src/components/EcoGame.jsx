import React, { useState, useEffect, useRef } from 'react';
import { GAME_ITEMS } from '../data/ecoData';
import { playPop, playSuccess, playError, playCelebration } from '../utils/audio';

export default function EcoGame({ isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [feedback, setFeedback] = useState(null); // { isCorrect, message }
  const [gameOver, setGameOver] = useState(false);
  const canvasRef = useRef(null);

  // Confetti effect when finishing
  useEffect(() => {
    if (gameOver && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      
      const particles = Array.from({ length: 60 }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height,
        size: Math.random() * 8 + 4,
        color: ['#22c55e', '#facc15', '#14b8a6', '#f43f5e', '#38bdf8'][Math.floor(Math.random() * 5)],
        speedY: Math.random() * 3 + 2,
        speedX: (Math.random() - 0.5) * 2,
        rotation: Math.random() * 360
      }));

      let animId;
      const render = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
          p.y += p.speedY;
          p.x += p.speedX;
          p.rotation += 2;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
          if (p.y > canvas.height) p.y = -10;
        });
        animId = requestAnimationFrame(render);
      };
      render();
      return () => cancelAnimationFrame(animId);
    }
  }, [gameOver]);

  if (!isOpen) return null;

  const currentItem = GAME_ITEMS[currentIndex];

  const handleChoose = (tachoId) => {
    if (feedback) return; // Prevent double click

    const isCorrect = currentItem.category === tachoId;
    if (isCorrect) {
      playSuccess();
      const points = 100 + streak * 20;
      setScore(prev => prev + points);
      setStreak(prev => prev + 1);
      setFeedback({
        isCorrect: true,
        message: `¡Correcto! +${points} pts. ${currentItem.hint}`
      });
    } else {
      playError();
      setStreak(0);
      const targetName = currentItem.category === 'verde' ? 'Verde (Aprovechables)' : currentItem.category === 'marron' ? 'Marrón (Orgánico/Papel)' : 'Negro (Rechazo)';
      setFeedback({
        isCorrect: false,
        message: `¡Ups! Este residuo iba en el tacho ${targetName}. Recuerda: ${currentItem.hint}`
      });
    }

    setTimeout(() => {
      setFeedback(null);
      if (currentIndex + 1 < GAME_ITEMS.length) {
        setCurrentIndex(prev => prev + 1);
      } else {
        playCelebration();
        setGameOver(true);
      }
    }, 1500);
  };

  const restartGame = () => {
    playPop();
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setFeedback(null);
    setGameOver(false);
  };

  return (
    <div className="modal-overlay animate-fade-in" onClick={onClose}>
      <div className="game-modal-card animate-scale-in" onClick={e => e.stopPropagation()}>
        <button className="btn-close-modal" onClick={onClose}>✕</button>

        {!gameOver ? (
          <>
            <div className="game-header">
              <span className="game-badge">🎮 Desafío Escolar</span>
              <h3 className="game-title">¿A qué tacho va este residuo?</h3>
              <p className="game-subtitle">
                Pon a prueba tus reflejos ecológicos y ayuda a proteger el suelo del patio de la escuela.
              </p>
            </div>

            {/* Score & Streak Bar */}
            <div className="game-status-bar">
              <div className="status-item">
                <span className="status-label">Puntaje</span>
                <span className="status-val">{score}</span>
              </div>
              <div className="status-item">
                <span className="status-label">Racha</span>
                <span className="status-val streak">🔥 x{streak}</span>
              </div>
              <div className="status-item">
                <span className="status-label">Progreso</span>
                <span className="status-val">{currentIndex + 1} / {GAME_ITEMS.length}</span>
              </div>
            </div>

            {/* Current Item Card */}
            <div className="game-item-display">
              <span className="item-big-icon animate-bounce">{currentItem.icon}</span>
              <h4 className="item-name">{currentItem.name}</h4>
              <p className="item-hint">Pista: {currentItem.hint}</p>
            </div>

            {/* Feedback message banner */}
            {feedback && (
              <div className={`game-feedback-banner ${feedback.isCorrect ? 'correct' : 'wrong'} animate-fade-in`}>
                {feedback.isCorrect ? '✅' : '❌'} {feedback.message}
              </div>
            )}

            {/* Bins targets */}
            <div className="game-bins-grid">
              <button 
                className="game-bin-btn bin-green"
                onClick={() => handleChoose('verde')}
                disabled={!!feedback}
              >
                <span className="bin-icon">♻️</span>
                <strong>Tacho Verde</strong>
                <span className="bin-desc">Plásticos PET & Papel Seco</span>
              </button>

              <button 
                className="game-bin-btn bin-brown"
                onClick={() => handleChoose('marron')}
                disabled={!!feedback}
              >
                <span className="bin-icon">🍂</span>
                <strong>Tacho Marrón</strong>
                <span className="bin-desc">Servilletas, Fruta & Orgánico</span>
              </button>

              <button 
                className="game-bin-btn bin-black"
                onClick={() => handleChoose('negro')}
                disabled={!!feedback}
              >
                <span className="bin-icon">🗑️</span>
                <strong>Tacho Negro</strong>
                <span className="bin-desc">Empaques Snacks & Rechazo</span>
              </button>
            </div>
          </>
        ) : (
          <div className="game-victory-screen">
            <canvas ref={canvasRef} className="confetti-canvas"></canvas>
            <span className="victory-icon">🏆</span>
            <h3>¡Desafío Completado!</h3>
            <p className="victory-score">Puntaje Final: <strong>{score} puntos</strong></p>
            <div className="victory-badge">
              {score >= 1000 ? '🌟 Rango: Guardián Maestro del Patio Escolar' : score >= 600 ? '🌿 Rango: Eco-Brigadista Destacado' : '🌱 Rango: Eco-Aprendiz'}
            </div>
            <p className="victory-msg">
              ¡Excelente trabajo! Conociendo la separación en origen prevenimos que los residuos se degraden en el suelo y aceleramos la economía circular.
            </p>
            <div className="victory-actions">
              <button className="btn-hero-primary" onClick={restartGame}>
                🔄 Jugar de nuevo
              </button>
              <button className="btn-modal-done" onClick={onClose}>
                Volver a la página ✨
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
