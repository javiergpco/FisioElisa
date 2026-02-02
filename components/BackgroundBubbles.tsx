import React from 'react';

export const BackgroundBubbles: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <style>{`
        @keyframes bubble {
          0% {
            transform: translateY(100vh) scale(0.5);
            opacity: 0;
          }
          20% { opacity: 0.5; }
          50% { opacity: 0.8; }
          80% { opacity: 0.4; }
          100% {
            transform: translateY(-20vh) scale(1.2);
            opacity: 0;
          }
        }
        .animate-bubble {
          animation: bubble 15s linear infinite;
        }
      `}</style>
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-brand-primary/10 animate-bubble"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 60 + 20}px`,
            height: `${Math.random() * 60 + 20}px`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 10 + 10}s`,
          }}
        />
      ))}
    </div>
  );
};