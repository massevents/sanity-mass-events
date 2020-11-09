function slugifyProject(input, prefix) {
  const slug = input
  return slug
    .toLowerCase()
    .replace(/\s+/g, '-')
    .slice(0, 200)
}

export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',

      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => slugifyProject(input, 'project/')
      }
    },

    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'subTitle',
      type: 'string',
      title: 'Subtitel'
    },

    {
      name: 'description',
      type: 'object',
      title: 'Description',
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1
      },
      fields: [
        {
          name: 'shortDescriptionTitle',
          type: 'string',
          title: 'Titel voor: Korte beschrijving'
        },
        {
          name: 'shortDescription',
          type: 'array',
          of: [{ type: 'block' }],
          title: 'Korte beschrijving'
        },
        {
          name: 'massEventsTitle',
          type: 'string',
          title: 'Titel voor: Wat heeft Mass Events gedaan?'
        },
        {
          name: 'massEvents',
          type: 'array',
          of: [{ type: 'block' }],
          title: 'Wat heeft Mass Events gedaan?'
        },
        {
          name: 'customHtml',
          title: 'Content van de pagina (als alternatief op standaard)',
          type: 'array',
          of: [{ type: 'block' }]
        }
      ]
    },

    {
      name: 'snippetDesc',
      type: 'text'
      title: 'Korte snippets voor overzichtspagina\'s'
    },
    {
      name: 'sponsors',
      type: 'object',
      title: 'Sponsors',
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1
      },
      fields: [
        {
          name: 'titleSponsors',
          type: 'string',
          title: 'Titel boven sponsors'
        },
        {
          name: 'partners',
          title: 'Partners',
          type: 'array',
          of: [
            {
              name: 'partnerGroup',
              type: 'object',
              title: 'Partnergroep',
              fields: [
                {
                  name: 'type',
                  title: 'Titel',
                  type: 'string'
                },
                {
                  title: 'Sponsors',
                  name: 'sponsors',
                  type: 'array',
                  of: [
                    {
                      type: 'string',
                      title: 'Sponsor',
                      name: 'sponsor'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'activities',
      type: 'object',
      title: 'Activiteiten',
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1
      },
      fields: [
        {
          name: 'titleActivities',
          type: 'string',
          title: 'Titel boven activities'
        },
        {
          name: 'activities',
          title: 'Activiteiten',
          type: 'array',
          of: [{ type: 'string' }]
        }
      ]
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
          name: 'logoSrc',
          type: 'image',
          title: 'Logoafbeelding'
        },
        {
          name: 'posterSrc',
          type: 'image',
          title: 'Poster afbeelding'
        },
        {
          name: 'images',
          type: 'array',
          of: [{ type: 'image' }],
          title: 'Fotoalbum'
        },
        {
          name: 'projectHeader',
          type: 'object',
          title: 'Project Header',
          fields: [
            {
              name: 'bgImage',
              type: 'image',
              title: 'In geval van afbeelding'
            },
            {
              name: 'videoId',
              type: 'string',
              title: 'In geval van video'
            }
          ]
        },
        {
          name: 'projectType',
          type: 'string',
          title: 'Type',
          options: {
            list: ['photo', 'video'],
            layout: 'radio',
            direction: 'horizontal'
          }
        }
      ]
    },

    {
      name: 'socialMedia',
      type: 'object',
      title: 'Socials',
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1
      },
      fields: [
        {
          name: 'facebookUrl',
          type: 'string',
          title: 'Facebook Url'
        },

        {
          name: 'instagramUrl',
          type: 'string',
          title: 'Instagram Url'
        },

        {
          name: 'linkedinUrl',
          type: 'string',
          title: 'Linkedin Url'
        },

        {
          name: 'websiteUrl',
          type: 'string',
          title: 'Website Url'
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
      media: 'media.logoSrc'
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
