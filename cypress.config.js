const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1440,
    viewportHeight: 720,
    baseUrl: 'https://www.kabum.com.br',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
});
