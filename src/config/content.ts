/**
 * Content Strings Configuration
 *
 * @description
 * Configurable text content for various site sections.
 * Modify these to customize messaging without touching component code.
 */

import type { AnnouncementConfig, ContentStrings } from '../lib/types';

/** Announcement bar configuration */
export const announcement: AnnouncementConfig = {
  /** Show/hide the announcement bar */
  enabled: true,

  /** Unique ID - change this to reset dismissal for new announcements */
  id: 'paid-only-2026',

  /** Announcement text */
  text: 'PodPDF is now a paid service. Purchase credits to get started.',

  /** Optional link URL */
  href: '/pricing',

  /** Optional link text */
  linkText: 'View pricing',

  /** Visual style: 'primary' | 'secondary' | 'gradient' */
  variant: 'primary',

  /** Allow users to dismiss the announcement */
  dismissible: true,
};

/** Configurable content strings for various sections */
export const content: ContentStrings = {
  newsletter: {
    title: 'Stay in the loop',
    description: 'Get the latest updates, tips, and news delivered to your inbox.',
    placeholder: 'Enter your email',
    buttonText: 'Subscribe',
    successMessage: 'Thanks for subscribing! Check your inbox to confirm.',
    errorMessage: 'Something went wrong. Please try again.',
    privacyNote: 'We respect your privacy. Unsubscribe at any time.',
  },
};
