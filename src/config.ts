/**
 * Site Configuration
 *
 * This file contains all the configuration settings for the Bloomfolio template.
 * Update these values to personalize your portfolio site.
 */

import type { Locale } from "./i18n";

/**
 * Social media links configuration
 */
export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  bluesky?: string;
  instagram?: string;
  youTube?: string;
  codetips?: string;
}

/**
 * Extra link configuration for FAB component
 */
export interface ExtraLink {
  /** URL or path for the link */
  link: string;
  /** Lucide icon component */
  icon: any;
  /** Tooltip label for the link */
  label: Record<Locale, string>;
}

/**
 * Extra links configuration
 */
export interface ExtraLinks {
  /** Enable or disable the FAB component */
  enable: boolean;
  /** Array of extra links to display */
  links: ExtraLink[];
}

/**
 * Sections visibility configuration
 * Control which sections appear on the index page
 */
export interface SectionsConfig {
  /** Show/hide About section */
  about: boolean;
  /** Show/hide Projects section */
  projects: boolean;
  /** Show/hide Work Experience section */
  work: boolean;
  /** Show/hide Education section */
  education: boolean;
  /** Show/hide Hackathons section */
  hackathons: boolean;
  /** Show/hide Contact section */
  contact: boolean;
}

export interface LocalizedProfile {
  /** Main title/headline */
  title: string;
  /** Site description for SEO and hero section */
  description: string;
  /** Location/City */
  location: string;
}

/**
 * Main site configuration interface
 */
export interface SiteConfig {
  /** Site/Portfolio name */
  name: string;
  /** Path to avatar/logo image */
  avatar: string;
  /** Contact email */
  email: string;
  /** Localized profile copy */
  profile: Record<Locale, LocalizedProfile>;
  /** Social media profile links */
  socialLinks: SocialLinks;
  /** Enable ThemeSelector (dropdown) instead of ThemeToggle (checkbox) */
  enableThemeSelector: boolean;
  /** Extra links configuration for FAB component */
  extraLinks: ExtraLinks;
  /** Sections visibility configuration (Hero is always visible) */
  sections: SectionsConfig;
}

/**
 * Site configuration object
 * Update these values to customize your portfolio
 */
export const siteConfig: SiteConfig = {
  name: "Iván Durán",
  avatar: "../assets/durandev-avatar.png",
  email: "ivan@durandev.com",
  profile: {
    es: {
      title:
        "<Strong>Desarrollador Web Full-Stack | Estudiante de Ingeniería Civil en Informática (UACh)</Strong>",
      description:
        "Construyo aplicaciones web con <Strong>React, Angular y Astro</Strong>, respaldadas por <Strong>FastAPI y PostgreSQL</Strong>, con foco en <Strong>experiencia de usuario y buenas prácticas de desarrollo.</Strong>",
      location: "🇨🇱 Valdivia, Chile",
    },
    en: {
      title:
        "<Strong>Full-Stack Web Developer | 5th-year Computer Engineering (UACh)</Strong>",
      description:
        "I build web applications using <Strong>React, Angular, and Astro</Strong>, backed by <Strong>FastAPI and PostgreSQL</Strong>, with a strong focus on <Strong>user experience and best development practices.</Strong>",
      location: "🇨🇱 Valdivia, Chile",
    },
  },
  socialLinks: {
    github: "https://github.com/ivan-duran",
    linkedin: "https://www.linkedin.com/in/ivan-duran-40745a2ba/",
    twitter: "",
    bluesky: "",
    instagram: "",
    youTube: "",
    codetips: "",
  },
  enableThemeSelector: false,
  extraLinks: {
    enable: false,
    links: [],
  },
  sections: {
    about: true,
    projects: true,
    work: true,
    education: true,
    hackathons: false,
    contact: true,
  },
};
