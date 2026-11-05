import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Layers, Cpu, Users2 } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { TaglineSlot } from '../ui/TaglineSlot';
import { HeroVisual } from './HeroVisual';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative pt-6 pb-16 sm:pt-12 sm:pb-24 overflow-hidden tech-grid-pattern tech-radial-glow border-b border-slate-200/80 bg-white"
    >
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Hero Content (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Top Identity Pill & Tagline Slot */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/90 border border-slate-200 text-xs font-mono text-slate-800 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="font-bold text-slate-900">MOM tech</span>
                <span className="text-slate-400">&bull;</span>
                <span className="text-slate-600 font-medium">master of matrix</span>
              </div>

              {/* Reusable slot ready for future third tagline */}
              <TaglineSlot variant="pill" placeholderText="build • compute • connect" theme="light" />
            </motion.div>

            {/* Primary Value Proposition Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]"
            >
              We build digital systems that feel{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600">
                clear, fast, and useful.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
            >
              MOM Technologies is an IT services and consultancy partner for businesses that need practical websites, apps, marketing, e-commerce, and custom workflow solutions.
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Button
                id="hero-start-project-btn"
                to="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Start a Project
              </Button>
              <Button
                id="hero-explore-services-btn"
                to="/services"
                variant="secondary"
                size="lg"
              >
                Explore Services
              </Button>
            </motion.div>
          </div>

          {/* Right Visual: Connected Workflow Matrix (5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <HeroVisual />
          </motion.div>
        </div>

        {/* Below-Hero Trust & Value Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 sm:mt-20 pt-8 border-t border-slate-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Value 1 */}
            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 flex-shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 font-mono">6+ Core Service Areas</div>
                <div className="text-xs text-slate-600">Strategy, Design, Code, Automation & More</div>
              </div>
            </div>

            {/* Value 2 */}
            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-purple-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 flex-shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 font-mono">360° Strategy, Design, Build & Support</div>
                <div className="text-xs text-slate-600">Complete end-to-end technical lifecycle</div>
              </div>
            </div>

            {/* Value 3 */}
            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-cyan-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 flex-shrink-0">
                <Users2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 font-mono">1 Focused Team</div>
                <div className="text-xs text-slate-600">From initial concept to production scale</div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

