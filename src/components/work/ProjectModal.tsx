import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  CheckCircle2,
  Cpu,
  ArrowRight,
} from 'lucide-react';
import { ProjectItem } from '../../types';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ProjectVisualPreview } from './ProjectVisualPreview';

interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectForConsultation: (project: ProjectItem) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  onSelectForConsultation,
}) => {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl z-10 space-y-6 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="space-y-2 pr-8">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="blue" size="sm">
                {project.category}
              </Badge>
              {project.isPlaceholder && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700 font-semibold">
                  SYSTEM BLUEPRINT // PLACEHOLDER
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {project.name}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              {project.shortDescription}
            </p>
          </div>

          {/* Visual Preview */}
          <div className="w-full">
            <ProjectVisualPreview
              type={project.image}
              accent={project.previewAccent}
              name={project.name}
            />
          </div>

          {/* Architecture Breakdown */}
          {project.architectureDetails && (
            <div className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <div className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider">
                    Core Business Requirement
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {project.architectureDetails.coreProblem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <div className="text-xs font-mono font-bold text-purple-700 uppercase tracking-wider">
                    Technical Solution
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {project.architectureDetails.technicalSolution}
                  </p>
                </div>
              </div>

              {/* Core Functional Modules */}
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase text-slate-700 font-bold tracking-wider flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-blue-700" />
                  <span>Key Architecture Modules</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.architectureDetails.modules.map((mod) => (
                    <div
                      key={mod}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="space-y-2 pt-2 border-t border-slate-200">
            <div className="text-xs font-mono uppercase text-slate-700 font-bold">
              Technologies & Frameworks
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-200">
            <div className="text-xs text-slate-600 font-mono">
              Ready to implement a similar solution for your business?
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button
                variant="outline"
                size="md"
                onClick={onClose}
                className="w-full sm:w-auto"
              >
                Close
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  onSelectForConsultation(project);
                  onClose();
                }}
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Build Similar System
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
