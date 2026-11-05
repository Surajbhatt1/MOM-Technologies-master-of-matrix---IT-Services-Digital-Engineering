export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  iconName: string;
  accentColor?: string;
  badgeGradient?: string;
  features?: string[];
  deliverables?: string[];
}

export interface ServicePillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  capabilities: string[];
}

export interface CompanyPillar {
  name: 'Strategy' | 'Design' | 'Engineering' | 'Marketing' | 'Automation' | 'Support';
  description: string;
  iconName: string;
}

export interface ProjectPreview {
  id: string;
  title: string;
  category: string;
  scope: string;
  outcome: string;
}

export type ProjectFilterCategory = 'All' | 'Web' | 'Mobile' | 'E-commerce' | 'Business Systems' | 'Marketing';

export type ProjectCategory = 
  | 'Web Experience'
  | 'E-commerce'
  | 'Business System'
  | 'Mobile App'
  | 'Marketing'
  | 'Dashboard';

export interface ProjectItem {
  id: string;
  name: string;
  category: ProjectCategory;
  filterCategory: ProjectFilterCategory;
  shortDescription: string;
  technologies: string[];
  image: string; // SVG visual preview or illustrative component key
  previewAccent: 'cyan' | 'purple' | 'blue' | 'emerald' | 'amber' | 'indigo';
  isPlaceholder: boolean;
  projectLink?: string;
  caseStudyLink?: string;
  architectureDetails?: {
    scope: string;
    coreProblem: string;
    technicalSolution: string;
    modules: string[];
  };
}
