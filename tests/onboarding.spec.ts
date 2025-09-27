// tests/onboarding.spec.ts
import { test, expect, Page, BrowserContext } from '@playwright/test';

let extensionId: string;

test.describe('Chrome Extension Onboarding Flow', () => {
  test.beforeEach(async ({page}) => {
    //baseURL from config file
    await page.goto('/chrome-extension-onboarding');
    await page.waitForLoadState();

  });

  test('Step 0: Open onboarding page [Priority 7]', async ({ page }) => {
    await page.getByText('Verify you are human').click();
    //Not possible, because the DOM API itself hides it.
    await expect(page.getByText('Get started with GPTZero')).toBeVisible();
  });

  test('Step 1: Get to know better -> Next [Priority 7]', async ({ page }) => {
    // Validate the presence of the "Get to know you better" text
    // Validate Next button is enabled after selecting an option
   
  });

  test('Step 2: Pin Instructions [Priority 1]', async ({ page }) => {
    // Valdiate the presence of the "Pin Instructions" text
    // Validate Next button is enabled and clickable
    
  });

  test('Step 3: Google Docs [Priority 6]', async ({ page, context }) => {
     // Valdiate the presence of the "AI writing and Instant writing " text
    // Validate Next button is enabled and clickable
    
  });

  test('Step 4: Share GPT [Priority 7]', async ({ page }) => {

    // Enter and validate all email fields
    // Validate send invite button is enabled and clickable
    // Validate inivitation sent notification. 
    // Validate Skip this step button is enabled and clickable

    
  });

  test('Step 6: Finish onboarding and Try it on given option', async ({ page }) => {
    // Validate Try it on Google Docs button is enabled and clickable
    // Validate try it on a webpage button is enabled and clickable
   
  });
});
