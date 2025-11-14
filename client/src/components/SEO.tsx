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

const defaultTitle = "Your Company Name";
const defaultDescription =
  "Replace this with your company description. Explain what you do and why customers should choose you.";
const defaultOgImage = "https://yoursite.com/og-image.jpg";
const siteUrl = "https://yoursite.com";

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
      <meta property="og:site_name" content="Your Company Name" />
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
  "@type": ["Organization", "ProfessionalService"],
  "@id": "https://yoursite.com/#organization",
  "name": "Your Company Name",
  "url": "https://yoursite.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://yoursite.com/logo.png",
  },
  "description":
    "Replace with your company description. Explain what you do and what makes you unique.",
  "email": "contact@yourcompany.com",
  "foundingDate": "2020",
  "knowsAbout": [
    "Your",
    "Areas of",
    "Expertise",
  ],
  "areaServed": {
    "@type": "Country",
    "name": "United States",
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+1-555-0000",
      "contactType": "customer support",
      "email": "contact@yourcompany.com",
      "availableLanguage": ["English"],
    },
  ],
  "sameAs": [],
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
    "areaServed": {
      "@type": "Country",
      "name": "United States",
    },
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
      "name": article.author || "Your Company Team",
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
