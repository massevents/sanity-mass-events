import conditionalFields from "./conditionalFields"
 
export default {
  type: 'object',
  name: 'ProjectOverview',
  title: 'ProjectOverview',
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
      title: "What do you want to show?",
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
                  {title: 'Show All', value: 'all'},
                  {title: 'Show Recent', value: 'recent'},
                  {title: 'Show custom', value: 'projects'},
                ],
                // layout: 'radio', // <-- leave out to make it a dropdown menu
              },
            },
          ]
        },
        {
          type: 'object',
          name: 'options',
          fields: [       
            {
              name: 'projects',
              description: 'Select the project(s))',
              type: 'array',
              of: [{
                type: 'reference',
                to: [{type: 'project'}]
              }]
            },
          ]
        }
      ]
    },
    {
      name: 'overviewUrl',
      type: 'reference',
      to: [{type: 'route'}],
      title: 'Overview URL'
    },
  ],
  preview: {
    select: {
      title:'headingTitle', 
      type: 'type'
    },
    prepare({ type, title }) {
      return {
        title: `Project overview block`,
        subtitle: `${title} (${type})`
      }
    }
  }
}
