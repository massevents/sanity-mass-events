function slugifyProject(input, prefix) {
  const slug = input
  return slug
    .toLowerCase()
    .replace(/\s+/g, '-')
    .slice(0, 200)
}

export default {
  name: 'sponsor',
  type: 'document',
  title: 'Sponsor',
  fields: [
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',

      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => slugifyProject(input, 'sponsor/')
      }
    },

    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'url',
      type: 'string',
      title: 'Url'
    },
    {
      name: 'logoSrc',
      type: 'image',
      title: 'Logo'
    },
    
    {
      name: 'seo',
      type: 'object',
      title: 'Search Engine Stuff',
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1
      },
      fields: [
        {
          name: 'description',
          type: 'text',
          title: 'Description',
          description: 'This description populates meta-tags on the webpage',
        },
        {
          name: 'openGraphImage',
          type: 'image',
          title: 'Open Graph Image',
          description: 'Image for sharing previews on Facebook, Twitter etc.'
        }
      ]
    },
    {
      name: 'includeInSitemap',
      type: 'boolean',
      title: 'Include page in sitemap',
      description: 'For search engines. Will be added to /sitemap.xml'
    },
    {
      name: 'disallowRobots',
      type: 'boolean',
      title: 'Disallow in robots.txt',
      description: 'Hide this route for search engines'
    },
  ],
  preview: {
    select: {
      slug: 'slug.current',
      pageTitle: 'title',
      media: 'logoSrc'
    },
    prepare({ slug, pageTitle, media }) {
      return {
        title: pageTitle,
        subtitle: `Slug: ${slug === '/' ? '/' : `/${slug}`}`,
        media: media
      }
    }
  }
}
