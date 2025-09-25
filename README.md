      - name: Install Playwright browsers
        run: |
          chmod +x ./node_modules/.bin/playwright
          npx playwright install --with-deps