export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5dd80510d185d5f07d899f77',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-qyco4172',
                  apiId: 'ead25a36-ec9a-4cc2-b9d2-96b422897bbd'
                },
                {
                  buildHookId: '5dd80510fef716ddb7d7033b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-xvqn4d1b',
                  apiId: 'caae388f-0cb6-48d2-8f30-6eee773726fc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fireb1003/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-xvqn4d1b.netlify.com', category: 'apps'}
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
