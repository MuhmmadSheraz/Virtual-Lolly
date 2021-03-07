  
var baseUrl =
process.env.NODE_ENV === "development"
  ? "http://localhost:8888"
  : "https://adareyou654321.netlify.app";

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Lollies",
        fieldName: "Lollies",
        url: `https://virtual-lolly-shazy2000.netlify.app/.netlify/functions/lollyCreate`,
      },
    },
  ],
}
