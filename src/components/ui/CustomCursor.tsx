import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import './CustomCursor.css';

export function CustomCursor() {
  const isMobile = useMediaQuery('(hover: none), (max-width: 768px)');
  const [isClicking, setIsClicking] = useState(false);
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'project' | 'text'>('default');

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { damping: 30, stiffness: 400 });
  const ringY = useSpring(cursorY, { damping: 30, stiffness: 400 });

  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-cursor="hover"]')) {
        setCursorVariant('hover');
      } else if (target.closest('[data-cursor="project"]')) {
        setCursorVariant('project');
      } else if (target.closest('p, h1, h2, h3, h4, h5, h6, span')) {
        setCursorVariant('text');
      } else {
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMobile, cursorX, cursorY]);

  if (isMobile) return null;

  const dotSize = cursorVariant === 'hover' ? 8 : cursorVariant === 'project' ? 12 : 6;
  const ringSize = cursorVariant === 'hover' ? 50 : cursorVariant === 'project' ? 80 : cursorVariant === 'text' ? 40 : 32;

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="cursor-dot"
        style={{
          x: cursorX,
          y: cursorY,
          width: dotSize,
          height: dotSize,
        }}
        animate={{
          scale: isClicking ? 0.5 : 1,
          opacity: cursorVariant === 'text' ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Outer ring */}
      <motion.div
        className={`cursor-ring cursor-ring--${cursorVariant}`}
        style={{
          x: ringX,
          y: ringY,
          width: ringSize,
          height: ringSize,
        }}
        animate={{
          scale: isClicking ? 0.8 : 1,
          opacity: isClicking ? 0.6 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      />

      {/* Click ripple */}
      {isClicking && (
        <motion.div
          className="cursor-ripple"
          style={{ x: cursorX, y: cursorY }}
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </>
  );
}
