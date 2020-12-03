function slugifyNews(input, prefix) {
  const slug = input
  return slug
    .toLowerCase()
    .replace(/\s+/g, '-')
    .slice(0, 200)
}

export default {
  name: 'news',
  type: 'document',
  title: 'News',
  fields: [
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',

      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => slugifyNews(input, 'news/')
      }
    },

    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{type: 'teammember'}]
    },

    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },

    {
      name: 'subTitle',
      type: 'string',
      title: 'Subtitle'
    },

    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }]
    },

    {
        name: 'content',
        type: 'array',
        title: 'Page sections (optional)',
        of: [
          { type: 'Contact' },
          { type: 'imageSection' },
          { type: 'textSection' },
          { type: 'About' },
          { type: 'Header' },
          { type: 'JumboVideo' },
          { type: 'JumboImage' },
          { type: 'ProjectOverview' },
          { type: 'TeamCarousel' },
          { type: 'WorkTogether' },
          { type: 'CityBackground' },
          { type: 'InfoContent' },
        ],
      },

    {
      name: 'snippetDesc',
      type: 'text',
      title: "Korte snippets voor overzichtspagina's"
    },
    {
      name: 'media',
      type: 'object',
      title: 'Media',
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1
      },
      fields: [
        {
          name: 'imageSrc',
          type: 'image',
          title: 'Hoofdafbeelding'
        },
        {
          name: 'images',
          type: 'array',
          of: [{ type: 'image' }],
          title: 'Fotoalbum'
        },
        {
          name: 'newsHeader',
          type: 'object',
          title: 'News Header',
          fields: [
            {
              name: 'bgImage',
              type: 'image',
              title: 'In geval van afbeelding'
            }
          ]
        }
      ]
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
          description: 'This description populates meta-tags on the webpage'
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
    }
  ],
  preview: {
    select: {
      slug: 'slug.current',
      pageTitle: 'title',
      media: 'media.imageSrc'
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
