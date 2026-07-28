import React, { useEffect, useState } from 'react';

export const CursorGlow: React.FC = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.closest('button') ||
          target.closest('a'))
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-0 transition-all duration-300 ease-out rounded-full blur-[80px] hidden md:block opacity-65"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        width: isHovering ? 'clamp(650px, 55vw, 1000px)' : 'clamp(550px, 50vw, 900px)',
        height: isHovering ? 'clamp(650px, 55vw, 1000px)' : 'clamp(550px, 50vw, 900px)',
        background: 'radial-gradient(circle, rgba(14, 169, 188, 0.35) 0%, rgba(11, 53, 80, 0.15) 45%, rgba(14, 169, 188, 0.05) 70%, transparent 85%)',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

