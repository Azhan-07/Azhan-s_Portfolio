import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../../data/projects';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  onClick: () => void;
}

export function ProjectCard({ project, featured = false, onClick }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -8, y: x * 8 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const showAllTechs = ['smart-attendance', 'aircanvas'].includes(project.id);
  const displayTechs = showAllTechs ? project.technologies : project.technologies.slice(0, 4);
  const linksBelowImage = featured && ['lead-generator', 'secure-link'].includes(project.id);

  const renderTechs = (
    <div className="project-card__techs">
      {displayTechs.map((tech) => (
        <span key={tech} className="project-card__tech mono">
          {tech}
        </span>
      ))}
      {!showAllTechs && project.technologies.length > 4 && (
        <span className="project-card__tech project-card__tech--more mono">
          +{project.technologies.length - 4}
        </span>
      )}
    </div>
  );

  const renderLinks = (
    <div className="project-card__links">
      {project.github && !['shayan-inventory', 'himo-kb'].includes(project.id) && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`project-card__link ${['secure-link', 'lead-generator', 'king-clothing', 'car-salon', 'grabify', 'live-location-tracker', 'url-shortener', 'srs-generator', 'searching-algorithm', 'smart-attendance', 'aircanvas', 'hand-volume-controller', 'mirror-clone', 'shayan-inventory', 'himo-kb'].includes(project.id) ? 'project-card__btn' : ''}`}
          onClick={(e) => e.stopPropagation()}
          data-cursor="hover"
        >
          GitHub
        </a>
      )}
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className={`project-card__link project-card__link--live ${['shayan-inventory', 'himo-kb'].includes(project.id) ? 'project-card__btn project-card__btn--live' : ''}`}
          onClick={(e) => e.stopPropagation()}
          data-cursor="hover"
        >
          Live Demo
        </a>
      )}
    </div>
  );

  return (
    <motion.div
      ref={cardRef}
      className={`project-card ${featured ? 'project-card--featured' : ''} ${linksBelowImage ? 'project-card--links-below-image' : ''} project-card--${project.id}`}
      data-cursor="project"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {}}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      <div className="project-card__image-wrap">
        <div className="project-card__image">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="project-card__image-img"
            />
          ) : (
            <div className="project-card__image-placeholder">
              <span className="project-card__image-number mono">
                {project.number}
              </span>
            </div>
          )}
        </div>
        <div className="project-card__image-overlay" />
        <div className="project-card__glow" />
      </div>

      {linksBelowImage && renderLinks}

      <div className="project-card__content">
        <div className="project-card__meta">
          <span className="mono project-card__number">{project.number}</span>
          {project.client && (
            <span className="project-card__client-badge">CLIENT</span>
          )}
          {project.tags?.map((tag) => (
            <span key={tag} className={`project-card__client-badge project-card__badge project-card__badge--${tag.replace(/[^a-z0-9]/gi, '').toLowerCase()}`}>{tag}</span>
          ))}
        </div>

        <h3 className="project-card__title">{project.title}</h3>

        <p className="project-card__desc">{project.description}</p>

        {renderTechs}

        {!linksBelowImage && renderLinks}
      </div>

      <div className="project-card__border" />
    </motion.div>
  );
}
