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

const defaultTitle = "Savvy Dealer - Digital Marketing for Automotive Dealerships";
const defaultDescription =
  "Expert digital marketing for car dealerships. Specializing in Facebook Ads, PPC, SEO/GEO optimization, and AI-powered dealer websites. We don't outspend the competition—we outsmart them.";
const defaultOgImage = "https://savvydealer.com/og-image.jpg";
const siteUrl = "https://savvydealer.com";

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
  const fullTitle = title ? `${title} | Savvy Dealer` : defaultTitle;
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
      <meta property="og:site_name" content="Savvy Dealer" />
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
  "@id": "https://savvydealer.com/#organization",
  "name": "Savvy Dealer",
  "url": "https://savvydealer.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://savvydealer.com/logo.png",
  },
  "description":
    "Expert digital marketing agency specializing in automotive dealership marketing, including Facebook Ads, PPC, SEO/GEO optimization, and AI-powered dealer websites.",
  "email": "support@savvydealer.com",
  "foundingDate": "2020",
  "knowsAbout": [
    "Automotive Marketing",
    "Digital Advertising",
    "Search Engine Optimization",
    "Pay-Per-Click Advertising",
    "Social Media Marketing",
    "Generative Engine Optimization",
    "Facebook Advertising",
    "Dealer Websites",
  ],
  "areaServed": {
    "@type": "Country",
    "name": "United States",
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+1-555-SAVVY-01",
      "contactType": "customer support",
      "email": "support@savvydealer.com",
      "availableLanguage": ["English"],
    },
    {
      "@type": "ContactPoint",
      "telephone": "+1-555-SAVVY-01",
      "contactType": "sales",
      "email": "support@savvydealer.com",
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
    "@id": `https://savvydealer.com${service.url}#service`,
    "serviceType": service.name,
    "name": service.name,
    "description": service.description,
    "url": `https://savvydealer.com${service.url}`,
    "provider": {
      "@id": "https://savvydealer.com/#organization",
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
    "@id": `https://savvydealer.com${article.url}#article`,
    "headline": article.headline,
    "description": article.description,
    "url": `https://savvydealer.com${article.url}`,
    "datePublished": article.publishedDate,
    "dateModified": article.modifiedDate || article.publishedDate,
    "author": {
      "@type": "Person",
      "name": article.author || "Savvy Dealer Team",
    },
    "publisher": {
      "@id": "https://savvydealer.com/#organization",
    },
    "image": article.image || defaultOgImage,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://savvydealer.com${article.url}`,
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
      "@id": "https://savvydealer.com/#organization",
    },
    ...(person.description && { "description": person.description }),
    ...(person.email && { "email": person.email }),
  };
}
