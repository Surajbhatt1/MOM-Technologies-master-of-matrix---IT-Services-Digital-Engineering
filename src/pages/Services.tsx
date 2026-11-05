import React from 'react';
import { HelpCircle } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { ServicesSection } from '../components/services/ServicesSection';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';

export const Services: React.FC = () => {
  const engagementModels = [
    {
      title: 'Full Product Delivery',
      badge: 'TURNKEY SPRINT',
      description:
        'End-to-end execution from initial architecture and UX design to full-stack implementation and store/cloud deployment.',
      idealFor: 'New web & mobile products, SaaS platforms, or complete legacy redesigns.',
    },
    {
      title: 'Dedicated Engineering Pod',
      badge: 'TEAM AUGMENTATION',
      description:
        'A dedicated cross-functional pod of senior engineers and designers integrating directly into your internal roadmap.',
      idealFor: 'Growing technology teams needing high-velocity execution and specialized domain expertise.',
    },
    {
      title: 'Targeted Solution Build',
      badge: 'FIXED SCOPE',
      description:
        'Focused delivery of a specific operational tool, e-commerce storefront, custom CRM, or marketing automation pipeline.',
      idealFor: 'Specific business operations, marketing campaigns, or workflow automation initiatives.',
    },
  ];

  const serviceFaqs = [
    {
      q: 'How does MOM Technologies structure project kickoffs?',
      a: 'Every engagement begins with a direct technical scoping session where we review your operational objectives, timeline, and technical constraints before proposing an architecture blueprint and fixed milestone plan.',
    },
    {
      q: 'Can you work with our existing codebase or third-party APIs?',
      a: 'Yes. We frequently integrate with existing backend microservices, legacy databases, payment gateways (Stripe, PayPal), CRM systems, and custom third-party APIs.',
    },
    {
      q: 'Do you provide post-launch support and ongoing maintenance?',
      a: 'Yes. In addition to turnkey delivery, we offer SLA maintenance agreements, performance tuning, and retainer pods for continuous feature iteration.',
    },
  ];

  return (
    <>
      <SEOHead
        title="Services — MOM Technologies"
        description="All services we provide. From public-facing websites to internal systems and outreach campaigns, we help businesses launch and improve the digital pieces that matter."
      />

      {/* Primary Services Section as specified */}
      <ServicesSection />

      {/* Structured Engagement Models */}
      <Section
        id="engagement-models"
        badge="HOW WE ENGAGE"
        badgeVariant="blue"
        title="Engagement structures tailored to your scale"
        description="Whether you need a dedicated turnkey delivery or targeted operational tooling, our collaboration models adapt to your velocity."
        background="surface"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {engagementModels.map((model) => (
            <div
              key={model.title}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition-all flex flex-col justify-between space-y-4 shadow-2xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="blue" size="sm">
                    {model.badge}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {model.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {model.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs font-mono text-slate-500">
                <span className="text-blue-700 font-bold">Ideal For:</span>{' '}
                {model.idealFor}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Practical FAQs for prospective clients */}
      <Section
        badge="CLARITY & PROCESS"
        badgeVariant="purple"
        title="Frequently asked technical questions"
        description="Common questions about our engineering workflow, technology stack, and delivery standards."
      >
        <div className="max-w-3xl mx-auto space-y-4">
          {serviceFaqs.map((faq) => (
            <div
              key={faq.q}
              className="p-6 rounded-xl bg-white border border-slate-200 space-y-2 hover:border-slate-300 transition-colors shadow-2xs"
            >
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2.5">
                <HelpCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6.5 font-normal">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};
