import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { siteConfig } from '../../data/site';
import { ErrorBoundary } from '../ui/ErrorBoundary';
import portraitImage from '../../assets/AZHAN ABDULLAH.png';
import './Hero.css';

const HeroScene = lazy(() => import('../three/HeroScene').then(m => ({ default: m.HeroScene })));

export function Hero() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.3 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 80, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const firstName = 'AZHAN';
  const lastName = 'ABDULLAH';

  return (
    <section id="hero" className="hero" ref={ref}>
      <Suspense fallback={null}>
        <ErrorBoundary>
          <HeroScene />
        </ErrorBoundary>
      </Suspense>

      <div className="hero__content container">
        <motion.div
          className="hero__text"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className="hero__label" variants={lineVariants}>
            <span className="mono">{siteConfig.roles[0]}</span>
            <div className="hero__label-line" />
          </motion.div>

          <h1 className="hero__title">
            <div className="hero__title-line">
              {firstName.split('').map((letter, i) => (
                <motion.span
                  key={`first-${i}`}
                  className="hero__title-letter"
                  variants={letterVariants}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <div className="hero__title-line">
              {lastName.split('').map((letter, i) => (
                <motion.span
                  key={`last-${i}`}
                  className="hero__title-letter"
                  variants={letterVariants}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </h1>

          <motion.div className="hero__roles" variants={lineVariants}>
            {siteConfig.roles.slice(1).map((role, i) => (
              <span key={role} className="hero__role">
                {role}
                {i < siteConfig.roles.length - 2 && <span className="hero__role-sep">/</span>}
              </span>
            ))}
          </motion.div>

          <motion.p className="hero__tagline" variants={lineVariants}>
            {siteConfig.tagline}
          </motion.p>

          <motion.div className="hero__cta" variants={lineVariants}>
            <a href="#projects" className="hero__btn hero__btn--primary" data-cursor="hover">
              <span>EXPLORE WORK</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L8 14M8 14L14 8M8 14L2 8" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__btn hero__btn--secondary"
              data-cursor="hover"
            >
              GITHUB
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__portrait"
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          animate={isInView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
          transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero__portrait-frame" data-cursor="project">
            <div className="hero__portrait-glow" />
            <div className="hero__portrait-image">
              <img
                src={portraitImage}
                alt="Azhan Abdullah"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="hero__scroll-line" />
        <span className="mono">SCROLL</span>
      </motion.div>
    </section>
  );
}
