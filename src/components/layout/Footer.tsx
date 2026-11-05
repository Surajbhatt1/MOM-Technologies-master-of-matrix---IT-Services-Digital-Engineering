import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { BrandLogo } from '../ui/BrandLogo';
import { ArrowUpRight, Mail, MapPin, ShieldCheck, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: 'Strategy & Architecture', href: '/services' },
    { label: 'UI/UX Product Design', href: '/services' },
    { label: 'Full-Stack Engineering', href: '/services' },
    { label: 'Growth & Digital Marketing', href: '/services' },
    { label: 'Workflows & Automation', href: '/services' },
    { label: 'SRE & System Support', href: '/services' },
  ];

  const companyLinks = [
    { label: 'About MOM Tech', href: '/about' },
    { label: 'Our Methodology', href: '/about' },
    { label: 'Case Studies & Work', href: '/work' },
    { label: 'Consulting Inquiries', href: '/contact' },
  ];

  const pillars = [
    'Strategy',
    'Design',
    'Engineering',
    'Marketing',
    'Automation',
    'Support',
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      {/* Top Banner / Positioning Highlight */}
      <div className="border-b border-slate-800/80 bg-slate-900/60 py-8">
        <Container size="xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <p className="text-slate-200 font-medium tracking-tight">
                &ldquo;We build digital systems that feel clear, fast, and useful.&rdquo;
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              {pillars.map((pillar) => (
                <span
                  key={pillar}
                  className="px-2.5 py-1 text-xs rounded-md bg-slate-800/80 border border-slate-700/80 text-slate-300 font-mono"
                >
                  {pillar}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Main Grid */}
      <div className="py-12 sm:py-16">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Brand & Description (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <BrandLogo size="md" theme="dark" showSubtitle={true} showTaglinePlaceholder={true} />
              
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm pt-2">
                MOM Technologies is an IT services and consultancy partner turning complex business problems into practical, high-performance digital products and systems for enterprise and startups.
              </p>

              <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-2">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Enterprise Grade</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-purple-400" />
                  <span>Full Lifecycle IT</span>
                </div>
              </div>
            </div>

            {/* Quick Navigation (2 cols) */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-semibold text-xs uppercase font-mono tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services (3 cols) */}
            <div className="lg:col-span-3">
              <h3 className="text-white font-semibold text-xs uppercase font-mono tracking-wider mb-4">
                Services & Capabilities
              </h3>
              <ul className="space-y-2.5">
                {services.map((service) => (
                  <li key={service.label}>
                    <Link
                      to={service.href}
                      className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Connect (3 cols) */}
            <div className="lg:col-span-3">
              <h3 className="text-white font-semibold text-xs uppercase font-mono tracking-wider mb-4">
                Contact & Inquiries
              </h3>
              <div className="space-y-3 text-sm">
                <p className="text-slate-400">
                  Ready to turn your idea into a digital product or modernize existing architecture?
                </p>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-cyan-500/40 text-cyan-300 hover:text-white hover:border-cyan-400 transition-colors font-medium text-xs uppercase tracking-wider font-mono shadow-xs"
                  >
                    <span>Start Project Dialogue</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="pt-3 space-y-1.5 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>inquiries@momtech.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>Global Remote & Tech Hubs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/80 py-6 text-xs text-slate-400">
        <Container size="xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>
              &copy; {currentYear} MOM Technologies (MOM tech - master of matrix). All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-slate-400">B2B & B2C Digital Partner</span>
              <span className="h-3 w-[1px] bg-slate-800" />
              <Link to="/contact" className="hover:text-slate-300 transition-colors">
                Support
              </Link>
              <Link to="/about" className="hover:text-slate-300 transition-colors">
                Privacy & Terms
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

