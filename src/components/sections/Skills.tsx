import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs, SiThreedotjs,
  SiNodedotjs, SiExpress, SiPython, SiPhp, SiOllama,
  SiMysql, SiMongodb, SiPostgresql, SiSqlite, SiCplusplus,
  SiGit, SiGithub, SiVite, SiNpm, SiDocker, SiVercel, SiNetlify, SiRender,
  SiClaudecode, SiOpencode,
} from 'react-icons/si';
import { VscTerminal, VscCode } from 'react-icons/vsc';
import { FaShieldHalved, FaBrain, FaRobot } from 'react-icons/fa6';
import { FaRocket } from 'react-icons/fa';
import { useInView } from '../../hooks/useInView';
import { skillCategories, type SkillCategory } from '../../data/skills';
import './Skills.css';

export function Skills() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState<SkillCategory>(skillCategories[0]);

  return (
    <section id="skills" className="skills section" ref={ref}>
      <div className="container">
        <motion.div
          className="skills__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="skills__title">TECHNOLOGY<br />ECOSYSTEM</h2>
        </motion.div>

        <motion.div
          className="skills__tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              className={`skills__tab ${activeCategory.id === cat.id ? 'skills__tab--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              data-cursor="hover"
              style={{ '--cat-color': cat.color } as React.CSSProperties}
            >
              <span className="skills__tab-dot" />
              {cat.name}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            className="skills__panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="skills__group-label" style={{ '--cat-color': activeCategory.color } as React.CSSProperties}>
              <FaRocket className="skills__group-icon" />
              <span>{activeCategory.name} Stack</span>
            </div>

            <div className="skills__grid">
              {activeCategory.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="skills__item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  data-cursor="hover"
                  style={{ '--item-color': activeCategory.color } as React.CSSProperties}
                >
                  <div className="skills__item-icon" style={{ '--icon-color': activeCategory.color } as React.CSSProperties}>
                    <SkillIcon name={skill.name} />
                  </div>
                  <span className="skills__item-name">{skill.name}</span>
                  <span className="skills__item-glow" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function SkillIcon({ name }: { name: string }) {
  const map: Record<string, any> = {
    HTML: SiHtml5,
    CSS: SiCss,
    JavaScript: SiJavascript,
    React: SiReact,
    'Next.js': SiNextdotjs,
    'Three.js': SiThreedotjs,
    'Node.js': SiNodedotjs,
    Express: SiExpress,
    Python: SiPython,
    PHP: SiPhp,
    MySQL: SiMysql,
    MongoDB: SiMongodb,
    PostgreSQL: SiPostgresql,
    SQLite: SiSqlite,
    SQL: SiMysql,
    'C++': SiCplusplus,
    Git: SiGit,
    GitHub: SiGithub,
    Vite: SiVite,
    npm: SiNpm,
    Docker: SiDocker,
    Vercel: SiVercel,
    Netlify: SiNetlify,
    Render: SiRender,
    'Claude Code': SiClaudecode,
    Codex: VscCode,
    opencode: SiOpencode,
    WSL: VscTerminal,
    Java: VscCode,
    'Machine Learning': FaBrain,
    'Local AI': SiOllama,
    Ollama: SiOllama,
    'AI Integrations': FaRobot,
    'AI Automation': FaRobot,
    'Prompt Engineering': FaRobot,
    'SSL/TLS': FaShieldHalved,
    'Secure Communication': FaShieldHalved,
    'Information Security': FaShieldHalved,
  };
  const Icon = map[name];
  return Icon ? <Icon /> : <span className="skills__item-dot" />;
}
