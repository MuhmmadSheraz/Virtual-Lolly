module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Lollies",
        fieldName: "Lollies",
        url: "https://modest-babbage-4a7996.netlify.app//.netlify/functions/lollyCreate",
      },
    },
  ],
}
