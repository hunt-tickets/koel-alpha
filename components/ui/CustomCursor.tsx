'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    setIsMounted(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Detect hoverable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.style.cursor === 'pointer'
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.style.cursor === 'pointer'
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [cursorX, cursorY]);

  if (!isMounted) return null;

  return (
    <>
      {/* Main cursor ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isClicking ? 0.8 : isHovering ? 1.3 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          {/* Main cursor circle with fill */}
          <motion.div
            className={`w-12 h-12 rounded-full border-2 ${
              isHovering ? 'border-koel-aqua bg-koel-aqua/20' : 'border-koel-teal bg-koel-teal/20'
            }`}
            animate={{
              borderColor: isHovering ? '#32A9AE' : '#005F73',
              backgroundColor: isHovering ? 'rgba(50, 169, 174, 0.2)' : 'rgba(0, 95, 115, 0.2)',
            }}
            transition={{ duration: 0.2 }}
          />

          {/* Inner dot */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-koel-teal"
            animate={{
              scale: isClicking ? 0 : isHovering ? 0 : 1,
              opacity: isHovering ? 0 : 1,
              backgroundColor: isHovering ? '#32A9AE' : '#005F73',
            }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      </motion.div>

      {/* Click ripple effect */}
      {isClicking && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9998]"
          style={{
            x: cursorX,
            y: cursorY,
          }}
        >
          <motion.div
            className="relative -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-koel-aqua"
            initial={{ scale: 0.5, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      )}

      <style jsx global>{`
        *,
        *::before,
        *::after,
        html,
        body,
        div,
        a,
        button,
        input,
        textarea {
          cursor: none !important;
        }

        body * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
