import { about, profileImage } from '@/config/About';
import { siteConfig } from '@/config/Meta';

export function JsonLd() {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author.name,
    url: siteConfig.url,
    image: `${siteConfig.url}${profileImage}`,
    description: about.description,
    jobTitle: 'Software Developer',
    sameAs: [
      `https://twitter.com/${siteConfig.author.twitter.replace('@', '')}`,
      `https://github.com/${siteConfig.author.github}`,
      `https://www.linkedin.com/in/${siteConfig.author.linkedin}`,
      siteConfig.author.blog,
    ],
    email: siteConfig.author.email,
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
    author: { '@type': 'Person', name: siteConfig.author.name },
    publisher: { '@type': 'Person', name: siteConfig.author.name },
    inLanguage: 'en',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
