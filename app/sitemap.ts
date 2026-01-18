import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.uksourcedltd.com';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        '',
        '/about',
        '/contact',
        '/services',
        '/wholesale',
        '/management',
        '/consulting',
        '/blog',
        '/ai-readiness',
        '/privacy',
        '/terms',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));
}
