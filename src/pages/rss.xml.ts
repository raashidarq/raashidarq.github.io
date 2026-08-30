import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const articles = await getCollection('writing', ({ data }) => !data.draft);
  const sortedArticles = articles.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  return rss({
    title: "Raashid Arquil's Technical Writing",
    description:
      'Articles, architectural decision records, and reflections on mobile engineering, edge machine learning, and systems architecture.',
    site: context.site ? context.site.toString() : 'https://raashidarq.github.io',
    items: sortedArticles.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.date),
      description: post.data.description,
      link: `/writing/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
