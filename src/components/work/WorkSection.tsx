import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ProjectItem, ProjectFilterCategory } from '../../types';
import { projectsList } from '../../data/projectsData';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

interface WorkSectionProps {
  showAllHeading?: boolean;
}

const filterCategories: { label: ProjectFilterCategory; countKey: string }[] = [
  { label: 'All', countKey: 'all' },
  { label: 'Web', countKey: 'Web' },
  { label: 'Mobile', countKey: 'Mobile' },
  { label: 'E-commerce', countKey: 'E-commerce' },
  { label: 'Business Systems', countKey: 'Business Systems' },
  { label: 'Marketing', countKey: 'Marketing' },
];

export const WorkSection: React.FC<WorkSectionProps> = ({ showAllHeading = true }) => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<ProjectFilterCategory>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Local filtering without external API
  const filteredProjects = projectsList.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.filterCategory === activeFilter;
  });

  const handleOpenDetails = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleSelectForConsultation = (project: ProjectItem) => {
    navigate(`/contact?service=${encodeURIComponent(project.category)}`);
  };

  return (
    <section id="selected-work-section" className="relative py-16 sm:py-24 overflow-hidden tech-grid-pattern bg-white">
      <Container size="xl">
        {/* Intro Header & Section Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Badge variant="blue" size="md">
              PORTFOLIO & SYSTEM BLUEPRINTS
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            Selected work.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
          >
            Digital products and systems designed around real business needs.
          </motion.p>
        </div>

        {/* Interactive Local Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterCategories.map((tab) => {
            const count =
              tab.label === 'All'
                ? projectsList.length
                : projectsList.filter((p) => p.filterCategory === tab.label).length;

            const isActive = activeFilter === tab.label;

            return (
              <button
                key={tab.label}
                type="button"
                onClick={() => setActiveFilter(tab.label)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-mono font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 border border-blue-300 font-bold shadow-2xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Filtered Projects Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpenDetails={handleOpenDetails}
                onOpenLivePreview={handleOpenDetails}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state safeguard */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 p-8 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto">
            <p className="text-slate-600 text-sm">No systems found in this category.</p>
            <button
              onClick={() => setActiveFilter('All')}
              className="mt-3 text-xs font-mono text-blue-600 font-semibold underline cursor-pointer"
            >
              Reset to All Work
            </button>
          </div>
        )}

        {/* Section CTA: Have a project in mind? Let's build it. */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 sm:mt-24 rounded-2xl bg-white border border-slate-200 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-2xs"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/80 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-50/80 rounded-full blur-3xl -z-10 pointer-events-none" />

          <Badge variant="blue" size="md">
            COLLABORATION & BUILD
          </Badge>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight max-w-xl mx-auto">
            Have a project in mind?
          </h2>

          <p className="text-slate-600 max-w-lg mx-auto text-base font-normal">
            Whether you need a full-scale web experience, mobile application, custom business system, or marketing engine, let&apos;s turn your vision into reliable code.
          </p>

          <div className="pt-2">
            <Button
              id="work-cta-build-btn"
              to="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Let&apos;s build it.
            </Button>
          </div>
        </motion.div>
      </Container>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectForConsultation={handleSelectForConsultation}
      />
    </section>
  );
};

