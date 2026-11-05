import { ProjectItem } from '../types';

export const projectsList: ProjectItem[] = [
  {
    id: 'web-brand-platform',
    name: 'Modern Web Experience & Design System',
    category: 'Web Experience',
    filterCategory: 'Web',
    shortDescription:
      'A responsive corporate web experience engineered with sub-second page transitions, modular content blocks, and accessible design system foundations.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Headless CMS'],
    image: 'web-experience',
    previewAccent: 'cyan',
    isPlaceholder: true,
    projectLink: '#',
    caseStudyLink: '#case-study-web-experience',
    architectureDetails: {
      scope: 'Corporate Web Presence & Content Hub',
      coreProblem:
        'Businesses require fast, fluid brand websites that balance visual identity with accessible typography, responsive performance, and effortless content publishing.',
      technicalSolution:
        'Built with a headless component architecture, automated asset pipelines, Core Web Vitals optimization, and clean micro-interactions.',
      modules: [
        'Modular Page Builder Elements',
        'Dynamic Theming & Dark Mode System',
        'SEO-Optimized Metadata Engine',
        'Lead Capture Form & Webhook Dispatcher',
      ],
    },
  },
  {
    id: 'b2c-ecommerce-storefront',
    name: 'Next-Gen E-Commerce & Checkout Flow',
    category: 'E-commerce',
    filterCategory: 'E-commerce',
    shortDescription:
      'High-throughput online storefront featuring instant product filtering, streamlined checkout flows, multi-currency cart handling, and inventory syncing.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'PostgreSQL'],
    image: 'ecommerce',
    previewAccent: 'blue',
    isPlaceholder: true,
    projectLink: '#',
    caseStudyLink: '#case-study-ecommerce',
    architectureDetails: {
      scope: 'Digital Retail & Subscription Storefront',
      coreProblem:
        'Online merchants experience significant cart abandonment when checkout flows are sluggish, multi-currency pricing is clumsy, or catalog navigation is heavy.',
      technicalSolution:
        'Engineered an edge-cached headless storefront with optimistic UI updates, integrated gateway processing, and automated transactional emails.',
      modules: [
        'Real-time Product Search & Variant Selector',
        'Multi-Step Frictionless Checkout Modal',
        'Automated Tax & Shipping Calculation',
        'Inventory Sync & Order Notification Engine',
      ],
    },
  },
  {
    id: 'business-operations-system',
    name: 'Custom Operations & Resource Management System',
    category: 'Business System',
    filterCategory: 'Business Systems',
    shortDescription:
      'Internal operations portal unifying staff scheduling, inventory movement, task dispatching, and automated cross-department status notifications.',
    technologies: ['TypeScript', 'Node.js', 'React', 'REST APIs', 'PostgreSQL'],
    image: 'business-system',
    previewAccent: 'purple',
    isPlaceholder: true,
    projectLink: '#',
    caseStudyLink: '#case-study-business-system',
    architectureDetails: {
      scope: 'Internal Operations & ERP Tooling',
      coreProblem:
        'Operational teams lose hours reconciling disparate spreadsheets, managing paper forms, and chasing status updates across email threads.',
      technicalSolution:
        'A unified, role-governed internal dashboard connecting operational databases with real-time websocket updates and automated status triggers.',
      modules: [
        'Role-Based Access Control (RBAC) Console',
        'Real-time Task Assignment & Dispatch Table',
        'Automated Status Transition Webhooks',
        'Comprehensive Audit Logging & History',
      ],
    },
  },
  {
    id: 'mobile-workflow-app',
    name: 'Cross-Platform Mobile Productivity & Field App',
    category: 'Mobile App',
    filterCategory: 'Mobile',
    shortDescription:
      'A cross-platform mobile application supporting offline-first workflows, push notifications, field team task tracking, and biometric authentication.',
    technologies: ['React Native', 'TypeScript', 'Tailwind', 'Push Notifications', 'SQLite'],
    image: 'mobile-app',
    previewAccent: 'emerald',
    isPlaceholder: true,
    projectLink: '#',
    caseStudyLink: '#case-study-mobile-app',
    architectureDetails: {
      scope: 'Cross-Platform Android & iOS Solution',
      coreProblem:
        'Field workers and mobile teams need seamless apps that remain responsive even during intermittent network connectivity in the field.',
      technicalSolution:
        'Constructed with an offline-first SQLite synchronization queue, background push receivers, and native hardware API integrations.',
      modules: [
        'Biometric Auth & Secure Keystore',
        'Offline Synchronization Queue',
        'Interactive Map & Route Pins',
        'Camera & Document Scanner Integration',
      ],
    },
  },
  {
    id: 'executive-analytics-dashboard',
    name: 'Executive Telemetry & KPI Analytics Dashboard',
    category: 'Dashboard',
    filterCategory: 'Business Systems',
    shortDescription:
      'Real-time executive dashboard aggregating multi-channel revenue, customer engagement telemetry, server latency metrics, and conversion funnels.',
    technologies: ['React', 'D3.js', 'Recharts', 'TypeScript', 'Tailwind CSS'],
    image: 'dashboard',
    previewAccent: 'indigo',
    isPlaceholder: true,
    projectLink: '#',
    caseStudyLink: '#case-study-dashboard',
    architectureDetails: {
      scope: 'Business Intelligence & Telemetry Hub',
      coreProblem:
        'Executive decision-makers struggle to synthesize fragmented performance data spread across disparate reporting services.',
      technicalSolution:
        'Engineered an interactive analytics canvas with customizable widget grids, real-time streaming charts, and scheduled PDF report generators.',
      modules: [
        'Interactive D3 Multi-Metric Time Series',
        'Real-Time Channel Conversion Breakdown',
        'Configurable Threshold Alert Rules',
        'Exportable Executive Summary Reports',
      ],
    },
  },
  {
    id: 'multi-channel-marketing-portal',
    name: 'Campaign Funnel & Mass Messaging Outreach Engine',
    category: 'Marketing',
    filterCategory: 'Marketing',
    shortDescription:
      'High-conversion campaign landing page system paired with automated mass SMS notifications, targeted email drip funnels, and UTM tracking.',
    technologies: ['TypeScript', 'Email APIs', 'SMS Gateways', 'Tailwind CSS', 'Vite'],
    image: 'marketing',
    previewAccent: 'amber',
    isPlaceholder: true,
    projectLink: '#',
    caseStudyLink: '#case-study-marketing',
    architectureDetails: {
      scope: 'Omni-Channel Lead Acquisition & Nurture',
      coreProblem:
        'Marketing teams struggle to sync paid ad traffic with tailored landing pages and instant SMS/email follow-up sequences.',
      technicalSolution:
        'Constructed high-speed responsive landing pages connected directly to automated communication pipelines and attribution analytics.',
      modules: [
        'Dynamic UTM Campaign Landing Pages',
        'Automated 2-Way SMS & Email Follow-Ups',
        'Audience Segmentation & Tagging Matrix',
        'Conversion Attribution & Click Telemetry',
      ],
    },
  },
];
