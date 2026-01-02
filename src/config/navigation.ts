/**
 * Navigation Configuration
 *
 * @description
 * Centralized navigation configuration for header and footer.
 * All navigation items are defined here for consistency and easy maintenance.
 *
 * Items with a `feature` property will only be shown if that feature is enabled
 * in the site config's feature flags.
 */

import type { Navigation } from '../lib/types';

export const navigation: Navigation = {
  /**
   * Header Navigation
   * - main: Primary navigation links
   * - cta: Call-to-action buttons on the right
   */
  header: {
    main: [
      { label: 'Pricing', href: '/pricing' },
      { label: 'API Docs', href: 'https://apidocs.podpdf.com' },
      { label: 'Help', href: '/help' },
    ],
    cta: [
      { label: 'Login', href: 'https://app.podpdf.com/login', variant: 'ghost' },
      { label: 'Sign Up', href: 'https://app.podpdf.com/signup', variant: 'primary' },
    ],
  },

  /**
   * Footer Navigation
   * Simplified footer with only essential links
   */
  footer: {
    product: [
      { label: 'Pricing', href: '/pricing' },
      { label: 'API Documentation', href: 'https://apidocs.podpdf.com' },
      { label: 'Changelog', href: '/changelog' },
    ],
    solutions: [
      { label: 'Dashboard', href: 'https://app.podpdf.com' },
    ],
    resources: [
      { label: 'Documentation', href: 'https://apidocs.podpdf.com' },
      { label: 'Help Center', href: '/help' },
      { label: 'Changelog', href: '/changelog' },
    ],
    company: [
      { label: 'Contact', href: '/help' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
};
