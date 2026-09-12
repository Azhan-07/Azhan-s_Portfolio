import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import './About.css';

export function About() {
  const { ref, isInView } = useInView({ threshold: 0.15 });
  const { ref: textRef, isInView: textInView } = useInView({ threshold: 0.2 });

  const description = [
    "I'm a Software Engineering student who loves building useful and creative things. I enjoy working on projects that combine technology, design, and problem-solving.",
    "I work with different areas of development, from modern web applications and 3D experiences to automation and AI-based systems. I'm always curious to learn new technologies and improve my skills.",
    "My skills include frontend development, backend systems, Python tools and automation, and machine learning. I enjoy turning ideas into real projects and creating digital experiences that are simple, useful, and engaging.",
  ];

  const highlights = [
    { label: 'Frontend', desc: 'Crafting pixel-perfect, animated interfaces' },
    { label: 'Full-Stack', desc: 'End-to-end application development' },
    { label: 'AI / ML', desc: 'Exploring machine intelligence & automation' },
    { label: 'Security', desc: 'Understanding secure system architecture' },
    { label: '3D Web', desc: 'Immersive WebGL & Three.js experiences' },
    { label: 'Python', desc: 'Automation, ML, and backend systems' },
  ];

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <motion.div
          className="about__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="about__title">WHO IS<br />AZHAN?</h2>
        </motion.div>

        <div className="about__grid" ref={textRef}>
          <motion.div
            className="about__text"
            initial={{ opacity: 0, y: 40 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {description.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div
            className="about__highlights"
            initial={{ opacity: 0, y: 40 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                className="about__highlight"
                initial={{ opacity: 0, x: -20 }}
                animate={textInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                data-cursor="hover"
              >
                <div className="about__highlight-label mono">{item.label}</div>
                <div className="about__highlight-desc">{item.desc}</div>
                <div className="about__highlight-line" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="about__decoration" aria-hidden="true">
        <div className="about__deco-circle about__deco-circle--1" />
        <div className="about__deco-circle about__deco-circle--2" />
      </div>
    </section>
  );
}
