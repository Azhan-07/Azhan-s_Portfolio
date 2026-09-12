import { motion } from 'framer-motion';
import { SiJavascript, SiPython, SiTypescript, SiHtml5, SiOpenjdk } from 'react-icons/si';
import { useInView } from '../../hooks/useInView';
import { siteConfig } from '../../data/site';
import './GitHub.css';

const stats = [
  { label: 'Repositories', value: '40+' },
  { label: 'Languages', value: '10+' },
  { label: 'Technologies', value: '30+' },
  { label: 'Projects', value: '25+' },
];

const languages = [
  {
    name: 'JavaScript',
    width: '85%',
    color: '#f7df1e',
    icon: <SiJavascript style={{ color: '#F7DF1E' }} />,
  },
  {
    name: 'Python',
    width: '70%',
    color: '#3776ab',
    icon: <SiPython style={{ color: '#3776AB' }} />,
  },
  {
    name: 'TypeScript',
    width: '55%',
    color: '#3178c6',
    icon: <SiTypescript style={{ color: '#3178C6' }} />,
  },
  {
    name: 'HTML/CSS',
    width: '90%',
    color: '#e34f26',
    icon: <SiHtml5 style={{ color: '#E34F26' }} />,
  },
  {
    name: 'Java',
    width: '30%',
    color: '#ed8b00',
    icon: <SiOpenjdk style={{ color: '#EA2D2E' }} />,
  },
];

export function GitHub() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="github" className="github section" ref={ref}>
      <div className="container">
        <motion.div
          className="github__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="github__title">OPEN<br />SOURCE</h2>
        </motion.div>

        <div className="github__grid">
          <motion.div
            className="github__profile"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="github__avatar">
              <svg width="48" height="48" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </div>
            <div>
              <h3 className="github__username">{siteConfig.github.split('/').pop()}</h3>
              <p className="github__bio">Building digital experiences</p>
            </div>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github__visit-btn"
              data-cursor="hover"
            >
              Visit Profile →
            </a>
          </motion.div>

          <motion.div
            className="github__stats"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="github__stat"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <span className="github__stat-value">{stat.value}</span>
                <span className="github__stat-label mono">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="github__languages"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h4 className="github__section-title mono">LANGUAGES</h4>
            {languages.map((lang, i) => (
              <div key={lang.name} className="github__lang">
                <div className="github__lang-header">
                  <span className="github__lang-name"><span className="github__lang-icon">{lang.icon}</span> {lang.name}</span>
                </div>
                <div className="github__lang-bar">
                  <motion.div
                    className="github__lang-fill"
                    style={{ background: lang.color }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: lang.width } : {}}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
