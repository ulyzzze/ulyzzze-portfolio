import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const createParticle = () => {
      if (!backgroundRef.current) return;

      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Types de particules variés
      const particleTypes = [
        { color: 'rgba(59, 130, 246, 0.6)', size: Math.random() * 3 + 1 }, // Bleu
        { color: 'rgba(139, 92, 246, 0.6)', size: Math.random() * 3 + 1 }, // Violet
        { color: 'rgba(16, 185, 129, 0.4)', size: Math.random() * 2 + 1 }, // Vert
        { color: 'rgba(245, 101, 101, 0.4)', size: Math.random() * 2 + 1 }, // Rouge
        { color: 'rgba(251, 191, 36, 0.5)', size: Math.random() * 2 + 1 }, // Jaune
      ];
      
      const type = particleTypes[Math.floor(Math.random() * particleTypes.length)];
      
      // Style de la particule
      particle.style.cssText = `
        width: ${type.size}px;
        height: ${type.size}px;
        background: ${type.color};
        left: ${Math.random() * 100}%;
        animation-duration: ${Math.random() * 15 + 10}s;
        animation-delay: ${Math.random() * 5}s;
        --drift: ${(Math.random() - 0.5) * 200}px;
      `;
      
      backgroundRef.current.appendChild(particle);
      
      // Nettoyer la particule après l'animation
      setTimeout(() => {
        if (particle && particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 25000);
    };

    const createStar = () => {
      if (!backgroundRef.current) return;

      const star = document.createElement('div');
      star.className = 'star';
      
      const size = Math.random() * 2 + 1;
      star.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation-delay: ${Math.random() * 3}s;
        animation-duration: ${Math.random() * 3 + 2}s;
      `;
      
      backgroundRef.current.appendChild(star);
    };

    const createConnectionLine = () => {
      if (!backgroundRef.current) return;

      const line = document.createElement('div');
      line.className = 'connection-line';
      
      const width = Math.random() * 200 + 50;
      line.style.cssText = `
        width: ${width}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        transform: rotate(${Math.random() * 360}deg);
        animation-delay: ${Math.random() * 4}s;
      `;
      
      backgroundRef.current.appendChild(line);
      
      setTimeout(() => {
        if (line && line.parentNode) {
          line.parentNode.removeChild(line);
        }
      }, 8000);
    };

    // Créer les éléments initiaux
    for (let i = 0; i < 50; i++) {
      setTimeout(() => createStar(), Math.random() * 1000);
    }

    for (let i = 0; i < 10; i++) {
      setTimeout(() => createConnectionLine(), Math.random() * 3000);
    }

    // Intervalles pour créer de nouveaux éléments
    const particleInterval = setInterval(createParticle, 500);
    const lineInterval = setInterval(createConnectionLine, 3000);

    // Cleanup
    return () => {
      clearInterval(particleInterval);
      clearInterval(lineInterval);
    };
  }, []);

  return (
    <>
      <div className="animated-background">
        <div className="mist"></div>
      </div>
      <div ref={backgroundRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Les particules seront ajoutées ici dynamiquement */}
      </div>
    </>
  );
};

export default AnimatedBackground;
