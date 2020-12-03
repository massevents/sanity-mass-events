import conditionalFields from './conditionalFields'

export default {
  type: 'object',
  name: 'NewsOverview',
  title: 'NewsOverview',
  fields: [
    {
      name: 'headingTitle',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'headingSubTitle',
      type: 'string',
      title: 'Subtitle'
    },
    {
      title: 'What do you want to show?',
      name: 'type',
      type: 'object',
      inputComponent: conditionalFields,
      fields: [
        {
          type: 'object',
          name: 'input',
          fields: [
            {
              name: 'condition',
              title: 'Choose one',
              type: 'string',
              options: {
                list: [
                  { title: 'Show All', value: 'all' },
                  { title: 'Show Recent', value: 'recent' },
                  { title: 'Show custom', value: 'news' }
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
              name: 'news',
              description: 'Select the news(s))',
              type: 'array',
              of: [
                {
                  type: 'reference',
                  to: [{ type: 'news' }]
                }
              ]
            }
          ]
        }
      ]
    },

    {
      name: 'format',
      type: 'string',
      title: 'How do you wanna show it?',
      options: {
        list: [
          'poster', 'newsblock'
        ],
        layout: 'radio',
        direction: 'horizontal'
      }
    },
    {
      title: 'Do we need a button?',
      name: 'button_enable',
      type: 'object',
      inputComponent: conditionalFields,
      fields: [
        {
          type: 'object',
          name: 'input',
          fields: [
            {
              name: 'condition',
              title: 'Choose one',
              type: 'string',
              options: {
                list: [
                  { title: 'Show', value: 'button_object' },
                  { title: "Don't show", value: 'button_object_no' }
                ],
                layout: 'radio' // <-- leave out to make it a dropdown menu
              }
            }
          ]
        },
        {
          type: 'object',
          name: 'options',
          fields: [
            {
              name: 'button_object',
              title: 'Url',
              type: 'object',
              fields: [
                
                {
                  name: 'button_url',
                  type: 'reference',
                  to: [{ type: 'route' }],
                  title: 'Overview URL'
                },
                
                {
                  name: 'button_label',
                  type: 'string',
                  title: 'Label Button'
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'headingTitle',
      type: 'type'
    },
    prepare({ type, title }) {
      return {
        title: `News overview block`,
        subtitle: `${title} (${type})`
      }
    }
  }
}
