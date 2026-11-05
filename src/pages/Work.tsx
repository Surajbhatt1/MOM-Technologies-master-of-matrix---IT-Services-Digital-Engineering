import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { WorkSection } from '../components/work/WorkSection';

export const Work: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Selected Work — MOM Technologies"
        description="Digital products and systems designed around real business needs. Explore web experiences, mobile apps, e-commerce storefronts, business systems, and dashboards."
      />

      <WorkSection />
    </>
  );
};
