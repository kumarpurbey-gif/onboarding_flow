# Test Results & Setup Guide

## Initial Setup

### Playwright
1. Install dependencies:
   ```bash
   npm install
   ```
2. Install Playwright browsers:
   ```bash
   npx playwright install
   ```
3. To run tests:
   ```bash
   npx playwright test
   ```

### Browser Extension
- The extension files are located in the `gptzero-chrome-extension/` directory.
- To load the extension in Chrome:
  1. Open Chrome and go to `chrome://extensions/`
  2. Enable "Developer mode"
  3. Click "Load unpacked" and select the `gptzero-chrome-extension/` folder.

## Test Plan

### Overview
The test plan focuses on validating the onboarding flow and integration of the browser extension using Playwright. The main areas covered are:
- Extension installation and activation
- UI elements rendering
- User interaction flows
- Error handling and edge cases

### Test Priorities

| Priority | Description                                                                 |
|----------|-----------------------------------------------------------------------------|
| P1       | Critical path: Extension loads, main widget appears, onboarding steps work   |
| P2       | Important: UI elements render correctly, user actions trigger expected flows |
| P3       | Nice-to-have: Edge cases, error messages, non-blocking UI details           |

#### Based on `onboarding.spec.ts`:
- **P1:** Tests that verify the extension is installed, the onboarding widget appears, and the user can complete the onboarding steps.
- **P2:** Tests for correct rendering of UI components, button clicks, and navigation within the extension.
- **P3:** Tests for error handling, unexpected user inputs, and visual details.

