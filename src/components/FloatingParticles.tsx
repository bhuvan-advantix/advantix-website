import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Particle = {
  id: number;
  size: number;
  color: string;
  position: { x: number; y: number };
  delay: number;
};

type Formation = 'random' | 'grid' | 'circle' | 'stack';

const FloatingParticles: React.FC = () => {
  const [formation, setFormation] = useState<Formation>('random');
  
  // Particle configurations with explicit size classes
  const particles = [
    {
      id: 1,
      size: 'w-16 h-16',
      color: 'from-purple-400 to-pink-500',
      position: { x: 0, y: 0 },
      delay: 0
    },
    {
      id: 2,
      size: 'w-12 h-12',
      color: 'from-blue-400 to-cyan-400',
      position: { x: 0, y: 0 },
      delay: 0.2
    },
    {
      id: 3,
      size: 'w-14 h-14',
      color: 'from-green-400 to-teal-400',
      position: { x: 0, y: 0 },
      delay: 0.4
    },
    {
      id: 4,
      size: 'w-10 h-10',
      color: 'from-yellow-400 to-orange-400',
      position: { x: 0, y: 0 },
      delay: 0.6
    },
    {
      id: 5,
      size: 'w-12 h-12',
      color: 'from-red-400 to-pink-500',
      position: { x: 0, y: 0 },
      delay: 0.8
    },
    {
      id: 6,
      size: 'w-14 h-14',
      color: 'from-indigo-400 to-purple-500',
      position: { x: 0, y: 0 },
      delay: 1
    }
  ];

  // Calculate positions based on current formation
  const getFormationPositions = (formation: Formation): { x: number; y: number }[] => {
    const centerX = 0;
    const centerY = 0;
    const radius = 150;
    
    switch (formation) {
      case 'grid':
        return [
          { x: -100, y: -50 },
          { x: 0, y: -50 },
          { x: 100, y: -50 },
          { x: -100, y: 50 },
          { x: 0, y: 50 },
          { x: 100, y: 50 },
        ];
      case 'circle':
        return Array(6).fill(0).map((_, i) => ({
          x: Math.cos((i / 6) * Math.PI * 2) * radius,
          y: Math.sin((i / 6) * Math.PI * 2) * radius,
        }));
      case 'stack':
        return Array(6).fill(0).map((_, i) => ({
          x: 0,
          y: (i - 2.5) * 60,
        }));
      case 'random':
      default:
        return Array(6).fill(0).map(() => ({
          x: (Math.random() - 0.5) * 200,
          y: (Math.random() - 0.5) * 200,
        }));
    }
  };

  // Cycle through formations
  useEffect(() => {
    const formations: Formation[] = ['random', 'grid', 'circle', 'stack'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % formations.length;
      setFormation(formations[currentIndex]);
    }, 5000);

    // Initial random positions
    setFormation('random');

    return () => clearInterval(interval);
  }, []);

  // Get current positions based on formation
  const positions = getFormationPositions(formation);

  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        {particles.map((particle, index) => (
          <motion.div
            key={particle.id}
            className={`absolute ${particle.size} rounded-full opacity-30 blur-sm shadow-xl bg-gradient-to-br ${particle.color}`}
            initial={{
              x: (Math.random() - 0.5) * 400,
              y: (Math.random() - 0.5) * 400,
              scale: 0.5,
            }}
            animate={{
              x: positions[index].x,
              y: positions[index].y,
              scale: 1,
            }}
            exit={{
              x: (Math.random() - 0.5) * 400,
              y: (Math.random() - 0.5) * 400,
              scale: 0.5,
            }}
            transition={{
              type: 'spring',
              damping: 15,
              stiffness: 50,
              mass: 0.5,
              delay: particle.delay,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FloatingParticles;
