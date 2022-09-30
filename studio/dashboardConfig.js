export default {
  widgets: [
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
                  buildHookId: '6336cef84a88280b7690cea0',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-27a1g559',
                  apiId: '3b6f1e7e-b0ef-479b-a5f6-0bca8da7c898'
                },
                {
                  buildHookId: '6336cef88f93260bd8360fbd',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-y8u25ee1',
                  apiId: 'b353c3c2-450b-40cc-ba94-e54952145825'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/irevdev/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-y8u25ee1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
