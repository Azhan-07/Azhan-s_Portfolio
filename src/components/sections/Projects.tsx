import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { useLenis } from '../../hooks/useLenis';
import { projects, categories, type Project } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';
import { ProjectDetail } from '../ui/ProjectDetail';
import './Projects.css';

export function Projects() {
  const { ref, isInView } = useInView({ threshold: 0.05 });
  const { stop, start } = useLenis();
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const featuredProjects = projects.filter((p) => p.featured);

  const handleProjectClick = useCallback((project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
    stop();
  }, [stop]);

  const handleClose = useCallback(() => {
    setSelectedProject(null);
    document.body.style.overflow = '';
    start();
  }, [start]);

  return (
    <>
      <section id="projects" className="projects section" ref={ref}>
        <div className="container">
          {/* Featured Projects */}
          <motion.div
            className="projects__featured-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="projects__title" id="work">SELECTED<br />WORK</h2>
          </motion.div>

          <div className="projects__featured-grid">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <ProjectCard
                  project={project}
                  featured
                  onClick={() => handleProjectClick(project)}
                />
              </motion.div>
            ))}
          </div>

          {/* All Projects with Filtering */}
          <motion.div
            className="projects__all-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="projects__subtitle">FULL ARCHIVE</h2>
          </motion.div>

          <div className="projects__filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`projects__filter ${activeCategory === cat ? 'projects__filter--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                data-cursor="hover"
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="projects__grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <ProjectCard
                    project={project}
                    onClick={() => handleProjectClick(project)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail project={selectedProject} onClose={handleClose} />
        )}
      </AnimatePresence>
    </>
  );
}
