// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'motion/react';
// import {
//   X,
//   CheckCircle2,
//   ArrowRight,
//   Globe,
//   Smartphone,
//   TrendingUp,
//   ShoppingBag,
//   Cpu,
//   Mail,
//   Zap,
//   ShieldCheck,
// } from 'lucide-react';
// import { ServiceItem } from '../../types';

// interface ServiceDetailModalProps {
//   service: ServiceItem | null;
//   onClose: () => void;
// }

// const iconMap: Record<string, React.ElementType> = {
//   Globe,
//   Smartphone,
//   TrendingUp,
//   ShoppingBag,
//   Cpu,
//   Mail,
// };

// export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
//   service,
//   onClose,
// }) => {
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') {
//         onClose();
//       }
//     };
//     if (service) {
//       window.addEventListener('keydown', handleKeyDown);
//       document.body.style.overflow = 'hidden';
//     }
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//       document.body.style.overflow = 'unset';
//     };
//   }, [service, onClose]);

//   if (!service) return null;

//   const IconComponent = iconMap[service.iconName] || Globe;

//   return (
//     <AnimatePresence>
//       <div
//         id="service-detail-modal-backdrop"
//         className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
//         onClick={onClose}
//       >
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95, y: 15 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           exit={{ opacity: 0, scale: 0.95, y: 15 }}
//           transition={{ duration: 0.2 }}
//           onClick={(e) => e.stopPropagation()}
//           className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-xl p-6 sm:p-8 overflow-hidden text-left my-8"
//         >
//           {/* Close button */}
//           <button
//             onClick={onClose}
//             aria-label="Close modal"
//             className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
//           >
//             <X className="w-5 h-5" />
//           </button>

//           {/* Header */}
//           <div className="flex items-start gap-4 mb-6 pr-8">
//             <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 flex-shrink-0">
//               <IconComponent className="w-7 h-7" />
//             </div>
//             <div>
//               <div className="flex items-center gap-2 mb-1">
//                 <span className="text-xs font-mono font-bold text-blue-700 tracking-wider">
//                   SERVICE {service.number} // CAPABILITY DEEP DIVE
//                 </span>
//               </div>
//               <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
//                 {service.title}
//               </h2>
//             </div>
//           </div>

//           {/* Description */}
//           <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
//             {service.description}
//           </p>

//           {/* Tags */}
//           <div className="flex flex-wrap gap-2 mb-6 pb-6 border-b border-slate-100">
//             {service.tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-slate-100 text-slate-800 border border-slate-200"
//               >
//                 #{tag}
//               </span>
//             ))}
//           </div>

//           {/* Features / Capabilities */}
//           {service.features && (
//             <div className="mb-6 space-y-3">
//               <h3 className="text-xs font-mono uppercase text-slate-900 font-bold tracking-wider flex items-center gap-2">
//                 <Zap className="w-3.5 h-3.5 text-blue-600" />
//                 <span>Core Engineering Highlights</span>
//               </h3>
//               <ul className="grid grid-cols-1 gap-2.5">
//                 {service.features.map((feat) => (
//                   <li
//                     key={feat}
//                     className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
//                   >
//                     <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
//                     <span>{feat}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* Key Deliverables */}
//           {service.deliverables && (
//             <div className="mb-8 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
//               <h4 className="text-xs font-mono uppercase text-slate-700 font-bold flex items-center gap-2">
//                 <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
//                 <span>Typical Deliverables</span>
//               </h4>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
//                 {service.deliverables.map((item) => (
//                   <div key={item} className="flex items-center gap-2">
//                     <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
//                     <span>{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Action Footer */}
//           <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
//             <button
//               onClick={onClose}
//               className="text-xs sm:text-sm font-mono text-slate-600 hover:text-slate-900 py-2 px-3 transition-colors cursor-pointer w-full sm:w-auto text-center"
//             >
//               Close Overview
//             </button>
//             <Link
//               to={`/contact?service=${encodeURIComponent(service.title)}`}
//               onClick={onClose}
//               className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 hover:from-blue-800 hover:via-indigo-700 hover:to-purple-700 shadow-2xs transition-all cursor-pointer active:scale-[0.99]"
//             >
//               <span>Discuss {service.title} Project</span>
//               <ArrowRight className="w-4 h-4" />
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     </AnimatePresence>
//   );
// };


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

import {
  X,
  CheckCircle2,
  ArrowRight,
  Globe,
  Smartphone,
  TrendingUp,
  ShoppingBag,
  Cpu,
  Mail,
  Zap,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react';

import { ServiceItem } from '../../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

// Service Icon Mapping
const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  TrendingUp,
  ShoppingBag,
  Cpu,
  Mail,
};

// MOM Tech WhatsApp Configuration
const WHATSAPP_NUMBER = '918087262006';

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
}) => {

  // Close modal using ESC key and prevent background scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (service) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [service, onClose]);

  if (!service) return null;

  // Dynamic service icon
  const IconComponent = iconMap[service.iconName] || Globe;

  // Dynamic WhatsApp Message
  const whatsappMessage = encodeURIComponent(
    `Hello MOM Tech!

I am interested in your ${service.title} service.

I would like to discuss my project requirements and understand how MOM Tech can help me.

Please share more details.

Thank you!`
  );

  // WhatsApp URL
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <AnimatePresence>
      <div
        id="service-detail-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-xl p-6 sm:p-8 overflow-hidden text-left my-8"
        >

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-start gap-4 mb-6 pr-8">

            <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 flex-shrink-0">
              <IconComponent className="w-7 h-7" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold text-blue-700 tracking-wider">
                  SERVICE {service.number} // CAPABILITY DEEP DIVE
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {service.title}
              </h2>
            </div>

          </div>

          {/* Description */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
            {service.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6 pb-6 border-b border-slate-100">

            {service.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-slate-100 text-slate-800 border border-slate-200"
              >
                #{tag}
              </span>
            ))}

          </div>

          {/* Core Engineering Highlights */}
          {service.features && (
            <div className="mb-6 space-y-3">

              <h3 className="text-xs font-mono uppercase text-slate-900 font-bold tracking-wider flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-blue-600" />
                <span>Core Engineering Highlights</span>
              </h3>

              <ul className="grid grid-cols-1 gap-2.5">

                {service.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />

                    <span>{feat}</span>
                  </li>
                ))}

              </ul>

            </div>
          )}

          {/* Typical Deliverables */}
          {service.deliverables && (
            <div className="mb-8 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">

              <h4 className="text-xs font-mono uppercase text-slate-700 font-bold flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
                <span>Typical Deliverables</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">

                {service.deliverables.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />

                    <span>{item}</span>
                  </div>
                ))}

              </div>

            </div>
          )}

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-slate-100">

            {/* Close Overview */}
            <button
              onClick={onClose}
              className="text-xs sm:text-sm font-mono text-slate-600 hover:text-slate-900 py-2 px-3 transition-colors cursor-pointer w-full sm:w-auto text-center"
            >
              Close Overview
            </button>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">

              {/* WhatsApp Integration Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Discuss ${service.title} on WhatsApp`}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-green-600 hover:bg-green-700 shadow-2xs transition-all duration-200 cursor-pointer active:scale-[0.99]"
              >
                <MessageCircle className="w-4 h-4" />

                <span>WhatsApp</span>
              </a>

              {/* Discuss Project Button */}
              <Link
                to={`/contact?service=${encodeURIComponent(service.title)}`}
                onClick={onClose}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 hover:from-blue-800 hover:via-indigo-700 hover:to-purple-700 shadow-2xs transition-all cursor-pointer active:scale-[0.99]"
              >
                <span>Discuss Project</span>

                <ArrowRight className="w-4 h-4" />
              </Link>

            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ServiceDetailModal;
