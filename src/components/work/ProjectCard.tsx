import React from 'react';
import { motion } from 'motion/react';
import {
  ExternalLink,
  ArrowUpRight,
  Eye,
} from 'lucide-react';
import { ProjectItem } from '../../types';
import { Badge } from '../ui/Badge';
import { ProjectVisualPreview } from './ProjectVisualPreview';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  onOpenDetails: (project: ProjectItem) => void;
  onOpenLivePreview?: (project: ProjectItem) => void;
}

const accentBorderMap = {
  cyan: 'hover:border-cyan-400 group-hover:shadow-sm',
  purple: 'hover:border-purple-400 group-hover:shadow-sm',
  blue: 'hover:border-blue-400 group-hover:shadow-sm',
  emerald: 'hover:border-emerald-400 group-hover:shadow-sm',
  amber: 'hover:border-amber-400 group-hover:shadow-sm',
  indigo: 'hover:border-indigo-400 group-hover:shadow-sm',
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onOpenDetails,
  onOpenLivePreview,
}) => {
  const accentHoverStyle = accentBorderMap[project.previewAccent] || accentBorderMap.cyan;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
      className={`rounded-2xl bg-white border border-slate-200 ${accentHoverStyle} p-5 sm:p-7 flex flex-col justify-between space-y-6 shadow-2xs relative overflow-hidden transition-all duration-300 group`}
    >
      {/* Top light beam indicator */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-600/0 to-transparent group-hover:via-blue-600/80 transition-all duration-500" />

      {/* Top Details & Large Visual Preview */}
      <div className="space-y-4">
        {/* Category & Placeholder Status Bar */}
        <div className="flex items-center justify-between gap-2">
          <Badge variant="blue" size="sm">
            {project.category}
          </Badge>

          {project.isPlaceholder && (
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600">
              BLUEPRINT TEMPLATE
            </span>
          )}
        </div>

        {/* Large Visual Project Preview Canvas */}
        <div className="relative">
          <ProjectVisualPreview
            type={project.image}
            accent={project.previewAccent}
            name={project.name}
          />
        </div>

        {/* Project Name & Short Description */}
        <div className="space-y-2 pt-1">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors">
            {project.name}
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            {project.shortDescription}
          </p>
        </div>
      </div>

      {/* Bottom Technologies & Interactive Actions */}
      <div className="space-y-4 pt-4 border-t border-slate-100">
        {/* Technologies Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Dual Actions: Live Preview / Case Study Spec */}
        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-700 hover:text-blue-900 font-bold group/btn transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Inspect Architecture & Specs</span>
            <ArrowUpRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </button>

          <button
            type="button"
            onClick={() => (onOpenLivePreview ? onOpenLivePreview(project) : onOpenDetails(project))}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-mono text-slate-800 transition-colors cursor-pointer font-medium"
          >
            <span>Live Blueprint</span>
            <ExternalLink className="w-3 h-3 text-blue-700" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

