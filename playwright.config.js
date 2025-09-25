// playwright.config.js
const { defineConfig } = require('@playwright/test');


module.exports = defineConfig({
  testDir: './tests',
  retries: 1,
  timeout: 30_000,
  workers: 3, // Parallel execution (default is # of cores)
  reporter: [[ 'html', {open: 'html '}]],
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


/*
    git init ? initialize a new Git repository in project directory
             .git : metadata, history and configurations for the repository
             local repository

    git add .  ? stage all changes in the current directory and all subdirectories
             it tells git what files to include in the next commit
             . meaning current directory and sub directory
             git commit

    git commit -m "Initial commit - Playwright tests" ?
            saves your changes to the repository history with a message    
 
    git remote add origin https://github.com/itnewcon/pwtests.git ?
        connects your local repository [ .git ] to a remote repository hosted on GitHub

    git remote -v

    git add . [ for all ]         
    git add test/login.spec.js  
    git commit -m "update login tests"        
    
    
Set up github actions to run tests
    GitHub actions = CI ( runs your tests on push )

> add reporter to playwright.config.js
    module.exports = defineConfig({
    testDir: './tests',
    retries: 1,
    timeout: 30_000,
    workers: 3, // Parallel execution (default is # of cores)
    reporter: [[ 'html', {open: 'html '}]],

> Create folder .github/workflows and create file inside
    playwright.yml
    
    $ mkdir -p .github/workflows

*/