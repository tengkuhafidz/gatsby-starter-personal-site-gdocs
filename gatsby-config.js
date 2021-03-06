require('dotenv').config()
/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: 'Tengku Hafidz',
    titleTemplate: '%s | Personal Site',
    description: 'The personal site of Tengku Hafidz',
    author: 'Tengku Hafidz',
    url: 'https://tengkuhafidz.com', // No trailing slash allowed!
    image: '/app-banner.jpg', // Path to your image you placed in the 'static' folder
    twitterUsername: 'sohafidz',
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true, // Enable tailwindcss support
      },
    },
    {
      resolve: 'gatsby-source-google-sheets-flexible',
      options: {
        apiKey: process.env.GATSBY_GOOGLE_CREDENTIALS,
        spreadsheetUrl: process.env.GATSBY_SHEET_URL,
        tabName: 'projects',
        cellRange: 'A1:F1000',
        majorDimension: 'ROWS',
      },
    },
  ],
}
