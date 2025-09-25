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
    headless: false,
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

> Then Push workflow 
    $ git add .    
    $ git commit -m "Add Actions CI workflow"
        [main f8c9022] Add Actions CI workflow
        2 files changed, 85 insertions(+)
        create mode 100644 .github/workflows/playwright.yaml

    $ git push

    PLEASE CHECK GIT REPOSITORY

> Run test
    $ npx playwright test

            
        Running 1 test using 1 worker
        1 passed (3.3s)

        To open last HTML report run:

        npx playwright show-report

PS C:\vat\StudentsWorkspace\ct-pwjs\myjs-ct\d26> npx playwright test

Running 1 test using 1 worker
  1 passed (3.3s)

To open last HTML report run:

  npx playwright show-report

PS C:\vat\StudentsWorkspace\ct-pwjs\myjs-ct\d26> git add .
warning: in the working copy of 'test-results/.last-run.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'playwright-report/index.html', LF will be replaced by CRLF the next time Git touches it
PS C:\vat\StudentsWorkspace\ct-pwjs\myjs-ct\d26> git commit -m "Add Reports CI Workflow"

[main 4922a88] Add Reports CI Workflow
 2 files changed, 85 insertions(+), 1 deletion(-)
 create mode 100644 playwright-report/index.html
PS C:\vat\StudentsWorkspace\ct-pwjs\myjs-ct\d26> git push
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 4 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (5/5), 173.80 KiB | 4.46 MiB/s, done.
Total 5 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/itnewcon/pwtests.git
   f8c9022..4922a88  main -> main        

    */