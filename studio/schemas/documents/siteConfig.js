import bcp47 from 'bcp47'
import conditionalFields from '../objects/conditionalFields'

export default {
  name: 'site-config',
  type: 'document',
  title: 'Site configuration',
  // https://www.sanity.io/docs/experimental/ui-affordances-for-actions
  __experimental_actions: [/* create, delete, */ 'update', 'publish'],
  fieldsets: [{ name: 'footer', title: 'Footer' }],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site title'
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'The main site url. Used to create canonical url'
    },
    {
      name: 'frontpage',
      type: 'reference',
      description: 'Choose page to be the frontpage',
      to: { type: 'page' }
    },
    {
      title: 'Site language',
      description: 'Should be a valid bcp47 language code like en, en-US, no or nb-NO',
      name: 'lang',
      type: 'string',
      validation: Rule =>
        Rule.custom(lang => (bcp47.parse(lang) ? true : 'Please use a valid bcp47 code'))
    },
    {
      title: 'Main navigation',
      name: 'mainNavigation',
      description: 'Select pages for the top menu',
      validation: Rule => [
        Rule.max(5).warning('Are you sure you want more than 5 items?'),
        Rule.unique().error('You have duplicate menu items')
      ],
      type: 'array',
      of: [
        {
          title: 'What do you want to show?',
          name: 'type',
          type: 'object',
          inputComponent: conditionalFields,
          preview: {
            select: {
              arrayTitle: 'arrayTitle',
              type: 'condition'
            },
            prepare({ arrayTitle, type }) {
              return {
                title: `${arrayTitle} (${type})`,
              };
            },
          },
          fields: [
            {
              type: 'object',
              name: 'input',
              fields: [
                {
                  type: 'string',
                  name: 'arrayTitle',
                  title: 'Title',
                },
                {
                  name: 'condition',
                  title: 'Choose one',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Internal Link', value: 'internalLink' },
                      { title: 'External Link', value: 'externalLink' }
                    ]
                    // layout: 'radio', // <-- leave out to make it a dropdown menu
                  }
                }
              ]
            },
            {
              type: 'object',
              name: 'options',
              fields: [
                {
                  name: 'internalLink',
                  description: 'Select the route',
                  type: 'reference',
                  to: [{ type: 'route' }]
                },
                {
                  name: 'externalLink',
                  description: 'Enter the link',
                  type: 'object',
                  fields: [
                    {
                      type: 'string',
                      title: 'URL',
                      name: 'url'
                    },
                    {
                      type: 'string',
                      title: 'Label',
                      name: 'label'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
