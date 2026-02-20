import { siteConfig } from '@/config/Meta';
import { getBlogPostSlugs } from '@/lib/blog';
import { getProjectCaseStudySlugs } from '@/lib/project';
import { MetadataRoute } from 'next';

const staticRoutes = [
  '',
  '/contact',
  '/work-experience',
  '/projects',
  '/blog',
  '/resume',
  '/gears',
  '/setup',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));

  const projectSlugs = getProjectCaseStudySlugs();
  const projectEntries: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: `${base}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogSlugs = getBlogPostSlugs();
  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...projectEntries, ...blogEntries];
}
