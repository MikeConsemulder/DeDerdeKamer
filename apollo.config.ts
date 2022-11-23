// apollo.config.js
module.exports = {
  client: {
    service: {
      name: "de-derder-kamer",
      // URL to the GraphQL API
      url: "http://localhost:3000/graphql",
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.ts"],
  },
};
