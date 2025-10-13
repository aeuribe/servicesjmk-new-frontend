import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'es'],

  // Used when no locale matches
  defaultLocale: 'en',

  // Opcional: prefijo en la URL (/en, /es, etc.)
  localePrefix: 'always',

  // Aquí defines los pathnames traducidos
  pathnames: {
    '/': '/',
    '/contact': {
      en: '/contact',
      es: '/contacto'
    },
    '/about': {
      en: '/about',
      es: '/acerca-de-nosotros'
    },
    '/services':{
      en: '/services',
      es: '/servicios'
    }
  }
});
