module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Lollies",
        fieldName: "Lollies",
        url: "http://localhost:8888/.netlify/functions/lollyCreate",
      },
    },
  ],
}
