module.exports = {
    pathPrefix: '/pinardy.github.io',
    siteMetadata: {
      title: `Pinardy Yang`,
      author: '@pinardy',
	  	description: 'real',
		  homepage: 'https://pinardy.github.io/',
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src/`,
        },
      },
      `gatsby-transformer-remark`,
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography.js`,
        },
      },
      {
        resolve: 'gatsby-plugin-github-pages',
        options: {
          customDomain: 'https://pinardy.github.io/',
          publishOptions: {
            /* ... */
          }
        }
      }
    ],
  };