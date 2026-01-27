
import { defineConfig, devices } from '@playwright/test';

import 'dotenv/config'

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,

  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,


  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],

  timeout: 60000,


  globalSetup: './utils/auth-setup.js',

  use: {

    baseURL: 'https://www.saucedemo.com',


    navigationTimeout: 30000,


    trace: 'on',


    launchOptions: {
      slowMo: process.env.CI ? 0 : 0
    },


    outputDir: './test-results/',


    storageState: 'auth/auth.json',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },
  ],
});
