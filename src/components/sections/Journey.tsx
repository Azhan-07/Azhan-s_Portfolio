import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import './Journey.css';

const timeline = [
  {
    title: 'Software Engineering',
    desc: 'Pursuing a degree in Software Engineering, building a strong foundation in computer science principles, algorithms, and system design.',
    icon: '🎓',
  },
  {
    title: 'Frontend Development',
    desc: 'Mastering HTML, CSS, JavaScript, and React to create responsive, animated, and pixel-perfect user interfaces.',
    icon: '🎨',
  },
  {
    title: 'Full-Stack Development',
    desc: 'Expanding to backend with Node.js, Express, and databases. Building complete applications end-to-end.',
    icon: '⚡',
  },
  {
    title: 'Python & AI / ML',
    desc: 'Exploring machine learning, computer vision, automation, and AI integrations with Python.',
    icon: '🤖',
  },
  {
    title: 'Information Security',
    desc: 'Learning SSL/TLS, secure communication, and information security principles. Building secure systems.',
    icon: '🔒',
  },
  {
    title: 'Automation',
    desc: 'Building tools and systems that automate workflows — from lead generation to data processing.',
    icon: '⚙️',
  },
  {
    title: '3D & Creative Web',
    desc: 'Diving into Three.js, WebGL, shaders, and immersive 3D web experiences. Pushing creative boundaries.',
    icon: '🌐',
  },
];

export function Journey() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="journey" className="journey section" ref={ref}>
      <div className="container">
        <motion.div
          className="journey__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="journey__title">DEVELOPER<br />TIMELINE</h2>
        </motion.div>

        <div className="timeline">
          <div className="timeline__line" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              className="timeline__item"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="timeline__node">
                <div className="timeline__node-dot" />
              </div>
              <div className="timeline__content">
                <div className="timeline__icon">{item.icon}</div>
                <h3 className="timeline__item-title">{item.title}</h3>
                <p className="timeline__item-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
