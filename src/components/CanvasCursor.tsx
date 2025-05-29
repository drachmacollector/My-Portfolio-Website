
// import React, { useEffect, useRef } from 'react';
// import confetti from 'canvas-confetti';

// const CanvasCursor = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     resizeCanvas();
//     window.addEventListener('resize', resizeCanvas);

//     const particles: Array<{
//       x: number;
//       y: number;
//       size: number;
//       speedX: number;
//       speedY: number;
//       life: number;
//       maxLife: number;
//       color: string;
//     }> = [];

//     const handleMouseMove = (e: MouseEvent) => {
//       const colors = ['#E50914', '#FF073A', '#FF1744'];
      
//       for (let i = 0; i < 3; i++) {
//         particles.push({
//           x: e.clientX + (Math.random() - 0.5) * 20,
//           y: e.clientY + (Math.random() - 0.5) * 20,
//           size: Math.random() * 3 + 1,
//           speedX: (Math.random() - 0.5) * 2,
//           speedY: (Math.random() - 0.5) * 2,
//           life: 0,
//           maxLife: 30 + Math.random() * 200,
//           color: colors[Math.floor(Math.random() * colors.length)]
//         });
//       }
//     };

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       for (let i = particles.length - 1; i >= 0; i--) {
//         const particle = particles[i];
//         particle.life++;
//         particle.x += particle.speedX;
//         particle.y += particle.speedY;
//         particle.speedY += 0.1; // gravity

//         const alpha = 1 - (particle.life / particle.maxLife);
//         ctx.globalAlpha = alpha;
//         ctx.fillStyle = particle.color;
//         ctx.beginPath();
//         ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
//         ctx.fill();

//         if (particle.life >= particle.maxLife) {
//           particles.splice(i, 1);
//         }
//       }

//       ctx.globalAlpha = 1;
//       requestAnimationFrame(animate);
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     animate();

//     return () => {
//       window.removeEventListener('resize', resizeCanvas);
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed inset-0 pointer-events-none z-50"
//       style={{ mixBlendMode: 'screen' }}
//     />
//   );
// };

// export default CanvasCursor;

'use client';

import useCanvasCursor from '../hooks/use-canvasCursor';

const CanvasCursor = () => {
  useCanvasCursor();

  return <canvas className='pointer-events-none fixed inset-0 z-50' id='canvas' />;
};

export default CanvasCursor;
