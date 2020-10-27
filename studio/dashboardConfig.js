export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f9859bc33993e012bf3808e',
                  title: 'Sanity Studio',
                  name: 'sanity-mass-events-studio',
                  apiId: '9221ef89-69bd-4962-850c-abdd4755707f'
                },
                {
                  buildHookId: '5f9859bca604ab00cf246f0e',
                  title: 'Landing pages Website',
                  name: 'sanity-mass-events',
                  apiId: 'c8b6c001-d517-4c84-93e9-f52dc0469217'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/massevents/sanity-mass-events',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-mass-events.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
