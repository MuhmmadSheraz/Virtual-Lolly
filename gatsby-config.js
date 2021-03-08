
module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Lollies",
        fieldName: "Lollies",
        url: `https://shazy-virtual-lolly.netlify.app/.netlify/functions/lollyCreate`,
      },
    },
  ],
}
