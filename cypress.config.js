const { defineConfig } = require("cypress");


module.exports = {
  e2e: {
    baseUrl: 'https://www.demoblaze.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
