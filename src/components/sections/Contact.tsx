import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { siteConfig } from '../../data/site';
import './Contact.css';

export function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <section id="contact" className="contact section" ref={ref}>
      <div className="container">
        <motion.div
          className="contact__content"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="contact__title">
            <span className="contact__title-line">LET'S BUILD</span>
            <span className="contact__title-line">SOMETHING</span>
            <span className="contact__title-line contact__title-accent">EXTRAORDINARY.</span>
          </h2>

          <p className="contact__desc">
            Have an idea, project, collaboration, or opportunity?
            <br />
            I'm always open to discussing new projects and creative ideas.
          </p>

          <div className="contact__actions">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__btn contact__btn--primary"
              data-cursor="hover"
            >
              <span>EMAIL ME</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 14L14 2M14 2H4M14 2V12" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__btn contact__btn--secondary"
              data-cursor="hover"
            >
              GITHUB
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__btn contact__btn--secondary"
              data-cursor="hover"
            >
              LINKEDIN
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__btn contact__btn--secondary"
              data-cursor="hover"
            >
              WHATSAPP
            </a>
          </div>
        </motion.div>

        <div className="contact__decoration" aria-hidden="true">
          <div className="contact__deco-text">LET'S CONNECT</div>
        </div>
      </div>
    </section>
  );
}
