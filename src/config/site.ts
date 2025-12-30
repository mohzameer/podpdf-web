/**
 * Site Configuration
 *
 * @description
 * Core site metadata and branding settings.
 * These values can be customized via environment variables or by editing the defaults below.
 */

import type { SocialLinks, LegalConfig } from '../lib/types';

/** Site name displayed in header, footer, and meta tags */
export const name = import.meta.env.SITE_NAME || 'PodPDF';

/** Site description for SEO and meta tags */
export const description =
  import.meta.env.SITE_DESCRIPTION || 'Convert HTML, Markdown, and images to professional PDFs. Use our visual web app or integrate our API. Start with 100 free PDFs.';

/** Production URL of your site (used for sitemap, RSS, canonical URLs) */
export const url = import.meta.env.SITE_URL || 'http://localhost:4321';

/** Author name for meta tags and copyright */
export const author = import.meta.env.SITE_AUTHOR || 'PodPDF Team';

/** Path to logo file (relative to /public) */
export const logo = '/logo.png';

/** Path to Open Graph image (relative to /public) */
export const ogImage = '/images/og-image.png';

/** Social media links */
export const social: SocialLinks = {
  twitter: 'https://twitter.com/podpdf',
  github: 'https://github.com/podpdf',
  discord: 'https://discord.gg/podpdf',
};

/** Legal configuration for privacy policy and terms pages */
export const legal: LegalConfig = {
  privacyEmail: 'podpdfapp@gmail.com',
  legalEmail: 'podpdfapp@gmail.com',
  lastUpdated: 'December 30, 2024',
};
