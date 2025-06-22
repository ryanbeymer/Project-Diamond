// playwright.config.js
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  // Run tests in files in parallel
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code
  forbidOnly: !!process.env.CI,

  // Retry on CI only
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI
  workers: process.env.CI ? 1 : undefined,

  // Reporter to use
  reporter: 'html',

  // Shared settings for all the projects below
  use: {
    // Base URL for API tests
    baseURL: 'https://reqres.in/api/',

    // Configure API request context
    extraHTTPHeaders: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-api-key': 'reqres-free-v1',
    },

    // Global test timeout
    actionTimeout: 0,

    // Collect trace when retrying the failed test
    trace: 'on-first-retry',
  },

  // Configure projects for major browsers if needed for UI tests
  projects: [
    {
      name: 'API Tests',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
