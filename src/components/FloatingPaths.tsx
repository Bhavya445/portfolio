'use client';

import { motion } from 'framer-motion';

export default function FloatingPaths({
  position,
  className,
  color = 'emerald',
}: {
  position: number;
  className?: string;
  color?: 'emerald' | 'rose' | 'sky' | 'violet';
}) {
  const colorMap = {
    emerald: 'text-emerald-300/30',
    rose: 'text-rose-300/30',
    sky: 'text-sky-300/30',
    violet: 'text-violet-300/30',
  };

  const paths = Array.from({ length: 36 }, (_, i) => {
    const duration = 20 + Math.random() * 10; // Runs only client-side
    return {
      id: i,
      d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
        380 - i * 5 * position
      } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
        152 - i * 5 * position
      } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
        684 - i * 5 * position
      } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
      width: 1.2 + i * 0.05,
      duration,
    };
  });

  return (
    <div className={'absolute inset-0 pointer-events-none ' + (className || '')}>
      <svg className={`w-full h-full ${colorMap[color]}`} viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.08 + path.id * 0.02}
            initial={{ pathLength: 0.3, opacity: 0.4 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.5, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: path.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
          />
        ))}
      </svg>
    </div>
  );
}
