import React from 'react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { SEOHead } from '../components/seo/SEOHead';
import { Hero } from '../components/home/Hero';
import { servicesList } from '../data/servicesData';
import { ServiceCard } from '../components/services/ServiceCard';
import { StrategyProcessSection } from '../components/about/StrategyProcessSection';
import { WhyMOMSection } from '../components/about/WhyMOMSection';
import { WorkSection } from '../components/work/WorkSection';

export const Home: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Home"
        description="MOM Technologies (MOM tech - master of matrix) builds digital systems that feel clear, fast, and useful."
      />

      {/* Hero Section */}
      <Hero />

      {/* 6 Core Services Section */}
      <Section
        id="capabilities"
        badge="ALL SERVICES WE PROVIDE"
        badgeVariant="cyan"
        title="All services we provide."
        description="From public-facing websites to internal systems and outreach campaigns, we help businesses launch and improve the digital pieces that matter."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesList.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to="/services" variant="secondary" size="md">
            View Complete Services Breakdown &rarr;
          </Button>
        </div>
      </Section>

      {/* SECTION 1 — Strategy meets execution */}
      <StrategyProcessSection />

      {/* SECTION 2 — Why MOM */}
      <WhyMOMSection />

      {/* Work / Projects Section */}
      <WorkSection />
    </>
  );
};
