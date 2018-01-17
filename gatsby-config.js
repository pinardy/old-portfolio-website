module.exports = {
    pathPrefix: `/pinardy.github.io`,
    siteMetadata: {
      title: `pinardy-yang`,
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
    ],
    
  };