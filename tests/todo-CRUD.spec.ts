import { test, expect } from '@playwright/test';

test('visits Todo on local server', async ({ page }) => {
  try {
    await page.goto('http://127.0.0.1:7002');
  } catch (error) {
    throw new Error('Failed to visit local server. You may not have it running');
  }
});

// test('add list item', async ({ page }) => {

// });

// test('update list item', async ({ page }) => {

// });

// test('delete list item', async ({ page }) => {

// });

// test('create multiple list items', async ({ page }) => {

// });

// test('delete multiple list items', async ({ page }) => {

// });

// test('active tab', async ({ page }) => {

// });

// test('completed tab', async ({ page }) => {

// });

// test('clear completed', async ({ page }) => {

// });

// feel free to add any other relevant tests
