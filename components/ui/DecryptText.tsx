'use client';

import { useEffect, useState, useRef, cloneElement } from 'react';
import { motion, useInView } from 'framer-motion';

interface DecryptTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

export default function DecryptText({ children, className = '', delay = 0 }: DecryptTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Extract plain text from children (including text inside tags)
  const getPlainText = (node: React.ReactNode): string => {
    if (typeof node === 'string') return node;
    if (Array.isArray(node)) return node.map(getPlainText).join('');
    if (node && typeof node === 'object' && 'props' in node) {
      const element = node as { props: { children?: React.ReactNode } };
      return getPlainText(element.props.children);
    }
    return '';
  };

  const plainText = getPlainText(children);

  useEffect(() => {
    if (!isInView || hasStarted) return;

    const startDecryption = setTimeout(() => {
      setHasStarted(true);
      const duration = 2000; // 2 seconds total
      const iterations = 20; // Number of iterations
      const iterationDuration = duration / iterations;

      let currentIteration = 0;

      const interval = setInterval(() => {
        setDisplayText(() => {
          const progress = currentIteration / iterations;
          const charsToReveal = Math.floor(plainText.length * progress);

          return plainText
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';
              if (index < charsToReveal) return char;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join('');
        });

        currentIteration++;

        if (currentIteration > iterations) {
          clearInterval(interval);
          setDisplayText(plainText);
        }
      }, iterationDuration);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startDecryption);
  }, [isInView, plainText, delay, hasStarted]);

  // Rebuild the HTML with decrypted text
  const rebuildWithDecryptedText = (node: React.ReactNode, textIndex: { current: number }): React.ReactNode => {
    if (typeof node === 'string') {
      const result = node.split('').map(() => {
        const char = displayText[textIndex.current] || '';
        textIndex.current++;
        return char;
      }).join('');
      return result;
    }

    if (Array.isArray(node)) {
      return node.map((child, i) =>
        rebuildWithDecryptedText(child, textIndex)
      );
    }

    if (node && typeof node === 'object' && 'type' in node && 'props' in node) {
      const element = node as React.ReactElement<{ children?: React.ReactNode }>;
      return cloneElement(element, {
        children: rebuildWithDecryptedText(element.props.children, textIndex)
      } as any);
    }

    return node;
  };

  const textIndex = { current: 0 };
  const rebuiltContent = displayText ? rebuildWithDecryptedText(children, textIndex) : null;

  return (
    <span ref={ref} className={className} style={{ opacity: hasStarted ? 1 : 0 }}>
      {rebuiltContent}
    </span>
  );
}
