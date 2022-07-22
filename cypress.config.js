const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "u928gc",
  
  e2e: {
    
    viewportWidth: 1440,
    viewportHeight: 720,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
});
