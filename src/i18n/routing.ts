import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'pt'],
 
  pathnames: {
    // The path to the locale-aware pages
    '/': {
      en: '/',
      pt: '/'
    },
    '/about': {
      en: '/about',
      pt: '/sobre'
    }
  },
  // Used when no locale matches
  defaultLocale: 'pt',
  localePrefix: 'never'
  
});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);