import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ServiceCard } from './ServiceCard';
import { ServiceDetailModal } from './ServiceDetailModal';
import { servicesList } from '../../data/servicesData';
import { ServiceItem } from '../../types';

interface ServicesSectionProps {
  showFullIntro?: boolean;
  className?: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  showFullIntro = true,
  className = '',
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section
      id="services-section"
      className={`relative py-16 sm:py-24 overflow-hidden tech-grid-pattern bg-slate-50/50 ${className}`}
    >
      <Container size="xl">
        {/* Intro Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Badge variant="blue" size="md">
              CAPABILITIES & SERVICES
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            All services we provide.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal"
          >
            From public-facing websites to internal systems and outreach campaigns, we help businesses launch and improve the digital pieces that matter.
          </motion.p>
        </div>

        {/* 6 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesList.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onOpenDetails={(s) => setSelectedService(s)}
            />
          ))}
        </div>

        {/* Section CTA: "Have a project in mind?" -> "Let's Talk" */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mt-16 sm:mt-24"
        >
          <div
            id="services-project-cta-banner"
            className="relative rounded-2xl bg-white border border-slate-200 p-8 sm:p-12 text-center overflow-hidden shadow-sm"
          >
            {/* Subtle background gradient accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/80 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-50/80 rounded-full blur-3xl -z-10" />

            <div className="max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span className="font-semibold">DIRECT COLLABORATION</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Have a project in mind?
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Whether you need a dedicated web application, mobile product, custom operational software, or multi-channel marketing campaigns, we&apos;re ready to turn your requirements into working software.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  id="services-cta-lets-talk-btn"
                  to="/contact"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Let&apos;s Talk
                </Button>
                <Button
                  to="/work"
                  variant="secondary"
                  size="lg"
                >
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Interactive Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};

