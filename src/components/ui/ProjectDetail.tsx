import { motion } from 'framer-motion';
import type { Project } from '../../data/projects';
import './ProjectDetail.css';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  return (
    <motion.div
      className="project-detail-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.div
        className={`project-detail project-detail--${project.id}`}
        data-lenis-prevent
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="project-detail__close" onClick={onClose} data-cursor="hover">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>

        <div className="project-detail__layout">
          <div className="project-detail__visual">
            <div className="project-detail__image">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-detail__image-img"
                />
              ) : (
                <div className="project-detail__image-placeholder">
                  <span className="mono">{project.number}</span>
                </div>
              )}
              <div className="project-detail__image-frame" />
            </div>
            <div className="project-detail__actions">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-detail__btn project-detail__btn--secondary"
                  data-cursor="hover"
                >
                  Live Demo
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </a>
              )}
              {project.github && !['shayan-inventory', 'himo-kb'].includes(project.id) && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-detail__btn project-detail__btn--primary"
                  data-cursor="hover"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  GitHub
                </a>
              )}
              <a
                href={`https://wa.me/message/NDDU6L3Z6E5FC1?text=${encodeURIComponent(`Hello, I want to get info on ${project.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="project-detail__btn project-detail__btn--whatsapp"
                data-cursor="hover"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          <div className="project-detail__content">
            <div className="project-detail__header">
              <div className="project-detail__meta">
                <span className="mono project-detail__number">{project.number}</span>
                {project.client && <span className="project-detail__client">CLIENT PROJECT</span>}
                {project.tags?.map((tag) => (
                  <span key={tag} className={`project-detail__client project-detail__badge project-detail__badge--${tag.replace(/[^a-z0-9]/gi, '').toLowerCase()}`}>{tag}</span>
                ))}
              </div>
              <h2 className="project-detail__title">{project.title}</h2>
            </div>

            <div className="project-detail__body">
              <div className="project-detail__section">
                <h3 className="project-detail__section-title mono">OVERVIEW</h3>
                <p>{project.longDescription || project.description}</p>
              </div>

              <div className="project-detail__section">
                  <h3 className="project-detail__section-title mono">TECHNOLOGIES</h3>
                  <div className="project-detail__techs">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="project-detail__tech">
                        {tech}
                      </span>
                    ))}
                  </div>
              </div>

              {project.caseStudy && (
                <div className="project-detail__section">
                  <h3 className="project-detail__section-title mono">CASE STUDY</h3>
                  <p>{project.caseStudy}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
