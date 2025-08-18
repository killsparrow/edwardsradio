// app/sitemap.ts
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const lastModified = new Date();
  const paths = ['/', '/music', '/video', '/contact'];

  return paths.map((p) => ({
    url: `${base}${p}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: p === '/' ? 1 : 0.6,
  })) as MetadataRoute.Sitemap;
}
