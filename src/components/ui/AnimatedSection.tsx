import { useMemo } from 'react';
import { motion, type MotionProps } from 'motion/react';

interface AnimatedSectionProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

const MotionDiv = motion.create('div');

export function AnimatedSection({
  children,
  className,
  as,
  ...motionProps
}: AnimatedSectionProps) {
  const MotionTag = useMemo(() => {
    if (!as) return MotionDiv;
    return motion.create(as as React.ElementType);
  }, [as]);

  return (
    <MotionTag
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={className}
      {...motionProps}
    >
      {children}
    </MotionTag>
  );
}
