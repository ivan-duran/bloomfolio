export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
};

export const dateLocales: Record<Locale, string> = {
  es: "es-CL",
  en: "en-US",
};

export const ogLocales: Record<Locale, string> = {
  es: "es_CL",
  en: "en_US",
};

export const ui = {
  es: {
    site: {
      defaultTitle: "Portafolio de Iván Durán",
      defaultDescription:
        "Portafolio de Iván Durán, desarrollador web full-stack.",
      titleSuffix: "Portafolio",
    },
    hero: {
      greeting: "Hola, soy",
    },
    sections: {
      projects: {
        title: "Mira mis últimos proyectos",
        subtitle: "",
      },
      work: "Experiencia laboral",
      education: "Educación",
      hackathons: {
        title: "Me gusta construir cosas",
        subtitle:
          "Durante mi etapa universitaria he participado en instancias donde equipos motivados convierten ideas en prototipos funcionales en pocos días.",
      },
    },
    pages: {
      projects: {
        title: "Proyectos",
        seoTitle: "Proyectos - Iván Durán",
        description:
          "Una selección de proyectos en los que he trabajado, mostrando mis habilidades y experiencia.",
      },
      },
    actions: {
      backToHome: "Volver al inicio",
      backToProjects: "Volver a proyectos",
      viewAllProjects: "Ver todos los proyectos",
      viewCompany: "Ver empresa",
      viewInstitution: "Ver institución",
      viewProject: "Ver proyecto",
      viewProjects: "Ver proyectos",
      viewProjectDetails: "Ver detalles del proyecto",
      liveDemo: "Demo en vivo",
      demo: "Demo",
      source: "Código",
      viewSource: "Ver código",
      readMore: "Leer más",
      goHome: "Ir al inicio",
      goBack: "Volver",
    },
    labels: {
      present: "Actualidad",
      ongoing: "En curso",
      techStack: "Tecnologías",
      minRead: "min de lectura",
      updated: "Actualizado",
      moreAboutMe: "Más sobre mí",
      moreLinks: "Más enlaces",
      close: "Cerrar",
      contact: "Contacto",
      documentation: "Documentación",
      reportIssue: "Reportar problema",
      switchLanguageTo: "Cambiar idioma a",
    },
    messages: {
      noProjects: "Aún no hay proyectos. Vuelve pronto.",
      solarwebAccess:
        "Nota: el acceso público está limitado por requisitos de autenticación.",
      contactPrefix: "¿Te interesa que trabajemos juntos?",
      contactMiddle: "Escríbeme a",
      contactOr: "o contáctame en",
      lookingFor: "Quizás estabas buscando:",
      needHelp: "¿Necesitas ayuda?",
      serverNote:
        "Esta página de error solo está activa al usar Server-Side Rendering (SSR). Actualmente, Bloomfolio está configurado para generación estática.",
    },
    errors: {
      notFoundTitle: "🥀 Página no encontrada",
      notFoundDescription:
        "La página que buscas no existe o fue movida. Volvamos a encaminarte.",
      serverTitle: "Error del servidor",
      serverDescription:
        "Ocurrió un error inesperado al procesar tu solicitud.",
      serverTryAgain:
        "Inténtalo nuevamente más tarde o contacta soporte si el problema persiste.",
    },
    paths: {
      home: "/",
      projects: "/projects",
      about: "/#about",
      contact: "/#contact",
    },
    dates: {
      lessThanMonth: "Menos de un mes",
      oneMonth: "1 mes",
      months: "meses",
      oneYear: "1 año",
      years: "años",
      year: "año",
    },
  },
  en: {
    site: {
      defaultTitle: "Iván Durán Portfolio",
      defaultDescription:
        "Portfolio of Iván Durán, full-stack web developer.",
      titleSuffix: "Portfolio",
    },
    hero: {
      greeting: "Hi, I'm",
    },
    sections: {
      projects: {
        title: "Check out my latest work",
        subtitle: "",
      },
      work: "Work Experience",
      education: "Education",
      hackathons: {
        title: "I like building things",
        subtitle:
          "During my time in university, I attended multiple hackathons where motivated teams brought ideas to life in just a few days.",
      },
    },
    pages: {
      projects: {
        title: "Projects",
        seoTitle: "Projects - Iván Durán",
        description:
          "A collection of projects I've worked on, showcasing my skills and experience.",
      },
      },
    actions: {
      backToHome: "Back to Home",
      backToProjects: "Back to Projects",
      viewAllProjects: "View All Projects",
      viewCompany: "View Company",
      viewInstitution: "View Institution",
      viewProject: "View Project",
      viewProjects: "View Projects",
      viewProjectDetails: "View project details",
      liveDemo: "Live Demo",
      demo: "Demo",
      source: "Source",
      viewSource: "View Source",
      readMore: "Read More",
      goHome: "Go Home",
      goBack: "Go Back",
    },
    labels: {
      present: "Present",
      ongoing: "Ongoing",
      techStack: "Tech Stack",
      minRead: "min read",
      updated: "Updated",
      moreAboutMe: "More about me",
      moreLinks: "More links",
      close: "Close",
      contact: "Contact",
      documentation: "Documentation",
      reportIssue: "Report Issue",
      switchLanguageTo: "Switch language to",
    },
    messages: {
      noProjects: "No projects yet. Check back soon!",
      solarwebAccess:
        "Note: Public access is limited due to authentication requirements.",
      contactPrefix: "Interested in working together?",
      contactMiddle: "Send me an email at",
      contactOr: "or contact me on",
      lookingFor: "You might be looking for:",
      needHelp: "Need help?",
      serverNote:
        "This error page is only active when using Server-Side Rendering (SSR). Currently, Bloomfolio is configured for static generation.",
    },
    errors: {
      notFoundTitle: "🥀 Page Not Found",
      notFoundDescription:
        "Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.",
      serverTitle: "Server Error",
      serverDescription:
        "An unexpected error occurred while processing your request.",
      serverTryAgain:
        "Please try again later or contact support if the problem persists.",
    },
    paths: {
      home: "/en",
      projects: "/en/projects",
      about: "/en#about",
      contact: "/en#contact",
    },
    dates: {
      lessThanMonth: "Less than a month",
      oneMonth: "1 month",
      months: "months",
      oneYear: "1 year",
      years: "years",
      year: "year",
    },
  },
} as const;

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function t(locale: Locale) {
  return ui[locale];
}

export function getLocaleFromPathname(pathname: string): Locale {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return isLocale(firstSegment) ? firstSegment : defaultLocale;
}

export function stripLocaleFromPathname(pathname: string): string {
  const cleanPath = pathname || "/";

  if (cleanPath === "/en") {
    return "/";
  }

  if (cleanPath.startsWith("/en/")) {
    return cleanPath.slice(3) || "/";
  }

  return cleanPath;
}

export function localizePath(pathname: string, locale: Locale): string {
  const strippedPath = stripLocaleFromPathname(pathname);
  const normalizedPath = strippedPath.startsWith("/")
    ? strippedPath
    : `/${strippedPath}`;

  if (locale === defaultLocale) {
    return normalizedPath;
  }

  return normalizedPath === "/" ? "/en" : `/en${normalizedPath}`;
}

export function switchLocalePath(pathname: string, locale: Locale): string {
  return localizePath(pathname, locale);
}

export function formatMonthYear(date: Date, locale: Locale): string {
  return date.toLocaleDateString(dateLocales[locale], {
    month: "short",
    timeZone: "UTC",
    year: "numeric",
  });
}

export function formatFullDate(date: Date, locale: Locale): string {
  return date.toLocaleDateString(dateLocales[locale], {
    month: "long",
    day: "numeric",
    timeZone: "UTC",
    year: "numeric",
  });
}

export function formatPeriod(
  startDate: Date,
  endDate: Date | undefined,
  locale: Locale,
): string {
  const start = formatMonthYear(startDate, locale);
  const end = endDate ? formatMonthYear(endDate, locale) : t(locale).labels.present;
  return `${start} - ${end}`;
}

export function formatDateRange(
  startDate: Date,
  endDate: Date | undefined,
  locale: Locale,
): string {
  const start = startDate.toLocaleDateString(dateLocales[locale], {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
    year: "numeric",
  });

  if (endDate && endDate.getTime() !== startDate.getTime()) {
    const end = endDate.toLocaleDateString(dateLocales[locale], {
      month: "short",
      day: "numeric",
      timeZone: "UTC",
      year: "numeric",
    });
    return `${start} - ${end}`;
  }

  return start;
}

export function calculateDuration(
  startDate: Date,
  endDate: Date | undefined,
  locale: Locale,
): string {
  const end = endDate || new Date();
  const months =
    (end.getUTCFullYear() - startDate.getUTCFullYear()) * 12 +
    (end.getUTCMonth() - startDate.getUTCMonth());
  const dictionary = t(locale).dates;

  if (months < 1) return dictionary.lessThanMonth;
  if (months === 1) return dictionary.oneMonth;
  if (months < 12) return `${months} ${dictionary.months}`;

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (remainingMonths === 0) {
    return years === 1 ? dictionary.oneYear : `${years} ${dictionary.years}`;
  }

  const yearLabel = years === 1 ? dictionary.year : dictionary.years;
  const monthLabel = remainingMonths === 1 ? dictionary.oneMonth : `${remainingMonths} ${dictionary.months}`;
  return `${years} ${yearLabel}, ${monthLabel}`;
}
