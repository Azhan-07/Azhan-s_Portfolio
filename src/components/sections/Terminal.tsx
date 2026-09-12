import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import './Terminal.css';

const terminalLines = [
  { prefix: '$', text: 'whoami' },
  { prefix: '', text: '' },
  { prefix: '', text: 'azhan@developer:~$' },
  { prefix: '', text: '' },
  { prefix: '→', text: 'Software Engineering Student' },
  { prefix: '→', text: 'Frontend Developer' },
  { prefix: '→', text: 'Full-Stack Developer' },
  { prefix: '→', text: 'Python Expert' },
  { prefix: '→', text: 'SaaS Developer' },
  { prefix: '→', text: 'AI Explorer' },
  { prefix: '→', text: '3D Web Enthusiast' },
  { prefix: '→', text: 'Information Security Learner' },
  { prefix: '→', text: 'Automation Builder' },
  { prefix: '', text: '' },
  { prefix: '$', text: 'echo $PASSION' },
  { prefix: '', text: 'Building digital experiences where engineering meets imagination.' },
];

export function Terminal() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [visibleLines, setVisibleLines] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < terminalLines.length) {
        setVisibleLines(currentLine + 1);
        setIsTyping(true);
        currentLine++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section className="terminal section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="terminal__title">DEVELOPER<br />IDENTITY</h2>
        </motion.div>

        <motion.div
          className="terminal__window"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="terminal__header">
            <div className="terminal__dots">
              <span className="terminal__dot terminal__dot--red" />
              <span className="terminal__dot terminal__dot--yellow" />
              <span className="terminal__dot terminal__dot--green" />
            </div>
            <span className="terminal__header-text mono">azhan@developer ~ </span>
          </div>

          <div className="terminal__body">
            {terminalLines.slice(0, visibleLines).map((line, i) => (
              <div key={i} className="terminal__line">
                {line.prefix && (
                  <span className="terminal__prefix">{line.prefix} </span>
                )}
                <span className={line.prefix === '$' ? 'terminal__command' : 'terminal__output'}>
                  {line.text}
                </span>
              </div>
            ))}
            {isTyping && (
              <div className="terminal__line">
                <span className="terminal__cursor">▊</span>
              </div>
            )}
          </div>

          <div className="terminal__scan" />
        </motion.div>
      </div>
    </section>
  );
}
