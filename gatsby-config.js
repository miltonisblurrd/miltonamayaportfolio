module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,600`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "<your-tracking-id-here>",
        head: true
      }
    },
  ],
  siteMetadata: {
    title: 'Milton Amaya',
    description: 'UX Designer | UI Developer',
    keywords: 'UX designer, product designer, portfolio, personal website',
    url: 'https://www.miltonamaya.com'
  }
};
