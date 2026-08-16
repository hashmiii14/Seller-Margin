import React from 'react';

export interface JsonLdProps {
  type: 'WebSite' | 'WebPage' | 'SoftwareApplication' | 'FAQPage' | 'BreadcrumbList' | 'Article';
  data: Record<string, any>;
}

export const JsonLd: React.FC<JsonLdProps> = ({ type, data }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
