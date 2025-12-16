import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  ogImageWidth?: string;
  ogImageHeight?: string;
  robots?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
  };
  schemas?: Record<string, any> | Record<string, any>[];
}

const defaultTitle = "Tampa Land Prep | Land Clearing & Site Preparation";
const defaultDescription =
  "Professional land clearing, grading, demolition & site preparation services in Tampa, Land O' Lakes, Lutz, and the greater Tampa Bay area. Licensed contractor serving Hillsborough, Pasco, Pinellas & Hernando counties.";
const defaultOgImage = "https://tampalandprep.com/attached_assets/hero_image_1765927533082.jpg";
const siteUrl = "https://tampalandprep.com";

export function SEO({
  title,
  description = defaultDescription,
  canonical,
  ogType = "website",
  ogImage = defaultOgImage,
  ogImageWidth = "1200",
  ogImageHeight = "630",
  robots,
  article,
  schemas,
}: SEOProps) {
  const fullTitle = title || defaultTitle;
  const canonicalUrl = canonical || siteUrl;
  const schemaArray = schemas ? (Array.isArray(schemas) ? schemas : [schemas]) : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {robots && <meta name="robots" content={robots} />}

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content={ogImageWidth} />
      <meta property="og:image:height" content={ogImageHeight} />
      <meta property="og:site_name" content="Tampa Land Prep" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={fullTitle} />

      {article && (
        <>
          {article.publishedTime && (
            <meta property="article:published_time" content={article.publishedTime} />
          )}
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.author && <meta property="article:author" content={article.author} />}
          {article.section && <meta property="article:section" content={article.section} />}
        </>
      )}

      {schemaArray.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
  "@id": "https://tampalandprep.com/#organization",
  "name": "Tampa Land Prep",
  "url": "https://tampalandprep.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://tampalandprep.com/attached_assets/logo-tampaland-prep_1765926841635.png",
  },
  "description":
    "Professional land clearing, grading, demolition & site preparation services in Tampa Bay. Licensed contractor serving residential and commercial clients.",
  "email": "contact@tampalandprep.com",
  "telephone": "+1-407-928-4376",
  "foundingDate": "2020",
  "knowsAbout": [
    "Land Clearing",
    "Site Preparation",
    "Grading and Leveling",
    "Demolition",
    "Brush Removal",
    "Driveway Preparation",
    "Home Site Prep",
    "Excavation"
  ],
  "areaServed": [
    {
      "@type": "County",
      "name": "Hillsborough County",
      "containedIn": "Florida"
    },
    {
      "@type": "County", 
      "name": "Pasco County",
      "containedIn": "Florida"
    },
    {
      "@type": "County",
      "name": "Pinellas County", 
      "containedIn": "Florida"
    },
    {
      "@type": "County",
      "name": "Hernando County",
      "containedIn": "Florida"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tampa",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "27.9506",
    "longitude": "-82.4572"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+1-407-928-4376",
      "contactType": "customer support",
      "email": "contact@tampalandprep.com",
      "availableLanguage": ["English", "Spanish"],
    },
  ],
  "sameAs": [],
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "07:00",
    "closes": "18:00"
  }
};

export function createServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  price?: string;
  id: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}${service.url}#service`,
    "serviceType": service.name,
    "name": service.name,
    "description": service.description,
    "url": `${siteUrl}${service.url}`,
    "provider": {
      "@id": `${siteUrl}/#organization`,
    },
    "areaServed": [
      {
        "@type": "County",
        "name": "Hillsborough County",
        "containedIn": "Florida"
      },
      {
        "@type": "County", 
        "name": "Pasco County",
        "containedIn": "Florida"
      },
      {
        "@type": "County",
        "name": "Pinellas County", 
        "containedIn": "Florida"
      },
      {
        "@type": "County",
        "name": "Hernando County",
        "containedIn": "Florida"
      }
    ],
    ...(service.price && {
      "offers": {
        "@type": "Offer",
        "price": service.price,
        "priceCurrency": "USD",
      },
    }),
  };
}

export function createBlogPostSchema(article: {
  headline: string;
  description: string;
  url: string;
  publishedDate: string;
  modifiedDate?: string;
  author?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${siteUrl}${article.url}#article`,
    "headline": article.headline,
    "description": article.description,
    "url": `${siteUrl}${article.url}`,
    "datePublished": article.publishedDate,
    "dateModified": article.modifiedDate || article.publishedDate,
    "author": {
      "@type": "Person",
      "name": article.author || "Tampa Land Prep Team",
    },
    "publisher": {
      "@id": `${siteUrl}/#organization`,
    },
    "image": article.image || defaultOgImage,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteUrl}${article.url}`,
    },
  };
}

export function createPersonSchema(person: {
  name: string;
  jobTitle: string;
  description?: string;
  email?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": person.name,
    "jobTitle": person.jobTitle,
    "worksFor": {
      "@id": `${siteUrl}/#organization`,
    },
    ...(person.description && { "description": person.description }),
    ...(person.email && { "email": person.email }),
  };
}
