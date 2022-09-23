export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '632da7737337300be64565a4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-pehm16wh',
                  apiId: '1f6476e7-0f72-43db-a301-ffeaa2851045'
                },
                {
                  buildHookId: '632da7747337300c3544f95b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-xy3xp379',
                  apiId: '35480cbd-d1f3-421d-8310-7d6126e41855'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kgry/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-xy3xp379.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
