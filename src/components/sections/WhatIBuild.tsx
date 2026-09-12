import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import './WhatIBuild.css';

const capabilities = [
  { num: '01', title: 'Web Applications', desc: 'Full-stack web apps with modern frameworks' },
  { num: '02', title: 'Interactive Frontends', desc: 'Animated, responsive, pixel-perfect interfaces' },
  { num: '03', title: 'E-Commerce Experiences', desc: 'Product presentation and shopping flows' },
  { num: '04', title: 'AI / ML Applications', desc: 'Machine learning models and AI integrations' },
  { num: '05', title: 'Automation Tools', desc: 'Workflow automation and data processing' },
  { num: '06', title: 'Security Projects', desc: 'Secure communication and encryption systems' },
  { num: '07', title: '3D Web Experiences', desc: 'Immersive WebGL and Three.js environments' },
  { num: '08', title: 'Client Websites', desc: 'Professional brand and business websites' },
  { num: '09', title: 'Developer Tools', desc: 'Utilities that improve development workflows' },
];

export function WhatIBuild() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="whatibuild section" ref={ref}>
      <div className="container">
        <motion.div
          className="whatibuild__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="whatibuild__title">WHAT I<br />BUILD</h2>
        </motion.div>

        <div className="whatibuild__list">
          {capabilities.map((item, i) => (
            <motion.div
              key={item.num}
              className="whatibuild__item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              data-cursor="hover"
            >
              <span className="whatibuild__num mono">{item.num}</span>
              <div className="whatibuild__item-content">
                <h3 className="whatibuild__item-title">{item.title}</h3>
                <p className="whatibuild__item-desc">{item.desc}</p>
              </div>
              <div className="whatibuild__item-line" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
