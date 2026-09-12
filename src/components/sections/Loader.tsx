import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../../data/site';
import './Loader.css';

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'reveal' | 'done'>('loading');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setPhase('reveal');
          setTimeout(() => onComplete(), 800);
          return 100;
        }
        return prev + Math.random() * 3 + 1;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="loader__content">
            <motion.div
              className="loader__label"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              ASSALAMU ALAIKUM
            </motion.div>

            <motion.h1
              className="loader__name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {siteConfig.author}
            </motion.h1>

            <motion.div
              className="loader__subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.6 }}
            >
              LOADING DIGITAL EXPERIENCE
            </motion.div>

            <motion.div
              className="loader__progress-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="loader__progress-bar">
                <motion.div
                  className="loader__progress-fill"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
              <div className="loader__progress-text">
                {String(Math.floor(Math.min(progress, 100))).padStart(3, '0')}
              </div>
            </motion.div>

            <div className="loader__scan-line" />
          </div>

          <motion.div
            className="loader__overlay"
            animate={{
              scaleY: phase === 'reveal' ? 1 : 0,
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
