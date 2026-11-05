import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title: string;
  description?: string;
  ogType?: 'website' | 'article';
}

/**
 * Dynamic SEO & Open Graph tag manager.
 * Injects accurate metadata, page title, and structured social share tags on client route transitions.
 */
export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description = 'MOM Technologies (MOM tech - master of matrix) builds digital systems that feel clear, fast, and useful. Strategy, Design, Engineering, Marketing, Automation, and Support.',
  ogType = 'website',
}) => {
  const location = useLocation();

  useEffect(() => {
    const fullTitle = title.includes('MOM Technologies')
      ? title
      : `${title} | MOM Technologies — master of matrix`;

    document.title = fullTitle;

    const setMetaTag = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      let meta = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute(attrName, attrValue);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    // Primary Meta Description
    setMetaTag('name', 'description', description);

    // Open Graph Tags
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:site_name', 'MOM Technologies (MOM tech)');
    setMetaTag('property', 'og:url', window.location.href);

    // Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
  }, [title, description, ogType, location.pathname]);

  return null;
};
