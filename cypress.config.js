const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Cypress Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
  },
  e2e: {
    baseUrl: "https://testing.suis-setiawan.my.id/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
