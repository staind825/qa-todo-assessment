import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';

test('visits Todo on local server', async ({ page }) => {
  try {
    await page.goto('http://127.0.0.1:7002');
  } catch (error) {
    throw new Error('Failed to visit local server. You may not have it running');
  }
});

test('add list item', async ({ page, browser }) => {
  try {
    await page.goto('http://127.0.0.1:7002');
  } catch (error) {
    throw new Error('Failed to visit local server. You may not have it running');
  }

  let b = await page.locator('[class="new-todo"]')
  await b.click()
  await b.fill('testing 123 testing')
  await b.press('Enter');
});

test('update list item', async ({ page }) => {
  try {
    await page.goto('http://127.0.0.1:7002');
  } catch (error) {
    throw new Error('Failed to visit local server. You may not have it running');
  }

  let b = page.locator('[class="new-todo"]')
  await b.click()
  await b.fill('testing 123 testing')
  await page.keyboard.press('Enter')

  await page.waitForTimeout(2000)

  await page.locator('[data-testid=todo-item-toggle]');
  
  const todoItemLabel = await page.waitForSelector('[data-testid=todo-item-label]', { timeout: 4000 });
  await todoItemLabel.dblclick();

  await page.waitForTimeout(2000)

  let  focused_element = page.locator(":focus")
  await focused_element.fill('new text');
  page.keyboard.press('Enter')
})


test('delete list item', async ({ page, context }) => {
  try {
    await page.goto('http://127.0.0.1:7002');
  } catch (error) {
    throw new Error('Failed to visit local server. You may not have it running');
  }

  let b = page.locator('[class="new-todo"]')
  await b.click()
  await b.fill('testing 123 testing')
  await page.keyboard.press('Enter')

  await page.waitForTimeout(2000)

  await page.locator('[data-testid=todo-item-toggle]').hover();

  const deleteButton = await page.locator('[data-testid=todo-item-button]').click();
  
  await page.waitForTimeout(2000)
});

test('create multiple list items', async ({ page, browser }) => {
  try {
    await page.goto('http://127.0.0.1:7002');
  } catch (error) {
    throw new Error('Failed to visit local server. You may not have it running');
  }
  // create multiple list items
  let b = page.locator('[class="new-todo"]')
  await b.click()
  await b.fill('testing 123 testing')
  await page.keyboard.press('Enter')


  let c = page.locator('[class="new-todo"]')
  await c.click()
  await c.fill('testing 456 testing')
  await page.keyboard.press('Enter')

  let d = page.locator('[class="new-todo"]')
  await c.click()
  await c.fill('testing 456 testing')
  await page.keyboard.press('Enter')

});

test('delete multiple list items', async ({ page }) => {
  try {
    await page.goto('http://127.0.0.1:7002');
  } catch (error) {
    throw new Error('Failed to visit local server. You may not have it running');
  }
  // create multiple list items
  let b = page.locator('[class="new-todo"]')
  await b.click()
  await b.fill('testing 123 testing')
  await page.keyboard.press('Enter')

  let c = page.locator('[class="new-todo"]')
  await c.click()
  await c.fill('testing 456 testing')
  await page.keyboard.press('Enter')

  let d = page.locator('[class="new-todo"]')
  await c.click()
  await c.fill('testing 456 testing')
  await page.keyboard.press('Enter')

  // delete multiple list items
  await page.locator('[data-testid=todo-item-toggle]').nth(0).hover();
  const deleteButton = await page.locator('[data-testid=todo-item-button]').nth(0).click();
  await page.locator('[data-testid=todo-item-toggle]').nth(0).hover();
  await deleteButton
  await page.locator('[data-testid=todo-item-toggle]').nth(0).hover();
  await deleteButton
  await page.waitForTimeout(2000)
})

test('completed tab', async ({ page, browser }) => {
  try {
    await page.goto('http://127.0.0.1:7002');
  } catch (error) {
    throw new Error('Failed to visit local server. You may not have it running');
  }

  // Create todo
  let b = page.locator('[data-testId=text-input]')
  await b.click()
  await b.fill('testing 123 testing')
  await page.keyboard.press('Enter')

  // Mark todo as completed
  await page.locator('[class=toggle]').click();

  // Click on completed tab to verify it is there
  await page.locator('text=Completed').nth(0);
  await page.locator('text=testing 123 testing');
});

// API Testing
// Use swapi https://swapi.dev/documentation

// test('Use https://swapi.dev/api/people to confirm that there are 82 people in the response', async ({ page }) => {
//   
// });

// test('Use https://swapi.dev/api/people/1 to find the name of Luke's homeworld', async ({ page }) => {
//   
// });

// test('Use https://swapi.dev/api/people/1 with a wookiee encoding to assert the name of the value "whrascwo"', async ({ page }) => {
//   
// });
