import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface SkillProgressBarProps {
  skill: string;
  level: number; // 0-100
  delay?: number;
}

export function SkillProgressBar({ skill, level, delay = 0 }: SkillProgressBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-baseline">
        <span className="text-sm text-gray-700">{skill}</span>
        <span className="text-xs text-gray-500">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[var(--color-rich-brown)] to-[var(--color-luxury-black)] rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 1.5,
            delay,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </div>
  );
}
