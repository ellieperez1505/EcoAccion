import React, { useState } from 'react';

const ITEMS = ['🍃', '💧', '🌱', '✨', '🍂', '🌿'];
const INITIAL_PARTICLES = Array.from({ length: 14 }).map((_, i) => ({
  id: i,
  char: ITEMS[i % ITEMS.length],
  left: ((i * 7 + 5) % 95),
  animationDuration: `${16 + (i % 5) * 3}s`,
  animationDelay: `${(i * 1.2) % 8}s`,
  fontSize: `${16 + (i % 4) * 4}px`,
  opacity: (0.25 + (i % 3) * 0.1).toFixed(2)
}));

export default function FloatingParticles() {
  const [particles] = useState(INITIAL_PARTICLES);

  return (
    <div className="floating-particles-layer" aria-hidden="true">
      {particles.map(p => (
        <span
          key={p.id}
          className="floating-particle"
          style={{
            left: `${p.left}%`,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
            fontSize: p.fontSize,
            opacity: p.opacity
          }}
        >
          {p.char}
        </span>
      ))}
    </div>
  );
}
