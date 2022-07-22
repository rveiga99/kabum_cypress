const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "u928gc",
    viewportWidth: 1440,
    viewportHeight: 720,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
});
