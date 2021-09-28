export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '615337f75c5e366172d1a956',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-yxvggeey',
                  apiId: 'd79e6dd3-1387-4e1f-9d0c-f83a34359d34'
                },
                {
                  buildHookId: '615337f764a12e683184278f',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-37uk5h9j',
                  apiId: '894bf2ac-4d56-4bd7-bad2-96d5cd25fe5c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/frankot/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-37uk5h9j.netlify.app', category: 'apps'}
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
