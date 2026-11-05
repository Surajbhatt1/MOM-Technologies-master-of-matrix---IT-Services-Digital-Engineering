import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Globe,
  Smartphone,
  TrendingUp,
  ShoppingBag,
  Cpu,
  Mail,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import { ServiceItem } from '../../types';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  onOpenDetails?: (service: ServiceItem) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  TrendingUp,
  ShoppingBag,
  Cpu,
  Mail,
};

// Color accents for light boutique consultancy aesthetic
const colorThemeMap: Record<
  string,
  {
    borderHover: string;
    iconBg: string;
    iconText: string;
    numberColor: string;
    tagBg: string;
    tagText: string;
    tagBorder: string;
    indicatorDot: string;
    accentBar: string;
  }
> = {
  cyan: {
    borderHover: 'hover:border-cyan-400',
    iconBg: 'bg-cyan-50 border-cyan-200 group-hover:bg-cyan-100/80',
    iconText: 'text-cyan-800',
    numberColor: 'text-slate-400 group-hover:text-cyan-700',
    tagBg: 'bg-cyan-50/60',
    tagText: 'text-cyan-900',
    tagBorder: 'border-cyan-200/70',
    indicatorDot: 'bg-cyan-600',
    accentBar: 'bg-cyan-600',
  },
  purple: {
    borderHover: 'hover:border-purple-400',
    iconBg: 'bg-purple-50 border-purple-200 group-hover:bg-purple-100/80',
    iconText: 'text-purple-800',
    numberColor: 'text-slate-400 group-hover:text-purple-700',
    tagBg: 'bg-purple-50/60',
    tagText: 'text-purple-900',
    tagBorder: 'border-purple-200/70',
    indicatorDot: 'bg-purple-600',
    accentBar: 'bg-purple-600',
  },
  emerald: {
    borderHover: 'hover:border-emerald-400',
    iconBg: 'bg-emerald-50 border-emerald-200 group-hover:bg-emerald-100/80',
    iconText: 'text-emerald-800',
    numberColor: 'text-slate-400 group-hover:text-emerald-700',
    tagBg: 'bg-emerald-50/60',
    tagText: 'text-emerald-900',
    tagBorder: 'border-emerald-200/70',
    indicatorDot: 'bg-emerald-600',
    accentBar: 'bg-emerald-600',
  },
  blue: {
    borderHover: 'hover:border-blue-400',
    iconBg: 'bg-blue-50 border-blue-200 group-hover:bg-blue-100/80',
    iconText: 'text-blue-800',
    numberColor: 'text-slate-400 group-hover:text-blue-700',
    tagBg: 'bg-blue-50/60',
    tagText: 'text-blue-900',
    tagBorder: 'border-blue-200/70',
    indicatorDot: 'bg-blue-600',
    accentBar: 'bg-blue-600',
  },
  amber: {
    borderHover: 'hover:border-amber-400',
    iconBg: 'bg-amber-50 border-amber-200 group-hover:bg-amber-100/80',
    iconText: 'text-amber-800',
    numberColor: 'text-slate-400 group-hover:text-amber-700',
    tagBg: 'bg-amber-50/60',
    tagText: 'text-amber-900',
    tagBorder: 'border-amber-200/70',
    indicatorDot: 'bg-amber-600',
    accentBar: 'bg-amber-600',
  },
  indigo: {
    borderHover: 'hover:border-indigo-400',
    iconBg: 'bg-indigo-50 border-indigo-200 group-hover:bg-indigo-100/80',
    iconText: 'text-indigo-800',
    numberColor: 'text-slate-400 group-hover:text-indigo-700',
    tagBg: 'bg-indigo-50/60',
    tagText: 'text-indigo-900',
    tagBorder: 'border-indigo-200/70',
    indicatorDot: 'bg-indigo-600',
    accentBar: 'bg-indigo-600',
  },
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index,
  onOpenDetails,
}) => {
  const IconComponent = iconMap[service.iconName] || Globe;
  const theme = colorThemeMap[service.accentColor || 'cyan'] || colorThemeMap.cyan;

  return (
    <motion.div
      id={`service-card-${service.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      className={`group relative flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 transition-all duration-300 ${theme.borderHover} hover:shadow-md overflow-hidden shadow-2xs`}
    >
      {/* Top subtle light beam on hover */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-600/80 transition-all duration-500" />

      {/* Top Header: Number & Dynamic Icon with Hover Animation */}
      <div>
        <div className="flex items-start justify-between mb-6">
          {/* Service Icon */}
          <div
            className={`w-13 h-13 sm:w-14 sm:h-14 rounded-xl border flex items-center justify-center p-3 transition-all duration-300 ${theme.iconBg} ${theme.iconText} group-hover:scale-105 shadow-2xs`}
          >
            <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>

          {/* Editorial Index Number & System Marker */}
          <div className="flex items-center gap-2 text-right">
            <span
              className={`text-2xl sm:text-3xl font-extrabold font-mono tracking-tight transition-colors duration-300 ${theme.numberColor}`}
            >
              {service.number}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-3 transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
          {service.description}
        </p>

        {/* Editorial Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-semibold border transition-colors ${theme.tagBg} ${theme.tagText} ${theme.tagBorder}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${theme.indicatorDot} mr-1.5 opacity-80`} />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer / Dual Actions: Learn More (Modal/Details) + Discuss Project */}
      <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {onOpenDetails ? (
          <button
            type="button"
            onClick={() => onOpenDetails(service)}
            className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-mono font-medium text-slate-700 hover:text-slate-900 py-2 px-3 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <span>Learn More</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
          </button>
        ) : (
          <div className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${theme.indicatorDot}`} />
            <span>MOM.SERVICES // {service.number}</span>
          </div>
        )}

        <Link
          to={`/contact?service=${encodeURIComponent(service.title)}`}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 hover:from-blue-800 hover:via-indigo-700 hover:to-purple-700 shadow-2xs transition-all active:scale-[0.99]"
        >
          <span>Discuss Project</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

