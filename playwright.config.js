// playwright.config.js
const { defineConfig } = require('@playwright/test');


module.exports = defineConfig({
  testDir: './tests',
  retries: 1,
  timeout: 30_000,
  workers: 3, // Parallel execution (default is # of cores)
  use: {
    baseURL: 'http://localhost:5500',
    headless: true,
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },

  ],
});


