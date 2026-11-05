import React from 'react';
import { Home, Compass } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { SEOHead } from '../components/seo/SEOHead';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEOHead title="404 Page Not Found" description="The requested page could not be located." />
      
      <Section paddingY="xl" background="default">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <Badge variant="purple" size="md">ERROR 404</Badge>
          
          <div className="text-6xl sm:text-8xl font-mono font-extrabold text-blue-700">
            404
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Page Not Found
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            The page or resource you are looking for has moved, been archived, or does not exist within the current routing table.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button to="/" variant="primary" size="md" icon={<Home className="w-4 h-4" />}>
              Return to Home
            </Button>
            <Button to="/services" variant="secondary" size="md" icon={<Compass className="w-4 h-4" />}>
              Explore Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};
