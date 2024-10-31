import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';

test('add list item', async ({ page, browser }) => {
  // A kind of bad example, please fix up this test!
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

test('delete list item', async ({ page, context }) => {
  // A kind of bad example, please fix up this test!
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
});

// TODO: Add your other tests from your test plan below. Reminder this whole assessment meant to take less than 3 hours!
// If you have the time, you can make more than 6 tests. Otherwise, once you finish your 6 tests you can 
// follow the format below by commenting out tests with a descriptive title of your test case you would have made

// test('add test 3', async ({ page, browser }) => {
//   try {
//     await page.goto('http://127.0.0.1:7002');
//   } catch (error) {
//     throw new Error('Failed to visit local server. You may not have it running');
//   }
// });

// test('add test 4', async ({ page, browser }) => {
//   try {
//     await page.goto('http://127.0.0.1:7002');
//   } catch (error) {
//     throw new Error('Failed to visit local server. You may not have it running');
//   }
// });

// test('add test 5', async ({ page, browser }) => {
//   try {
//     await page.goto('http://127.0.0.1:7002');
//   } catch (error) {
//     throw new Error('Failed to visit local server. You may not have it running');
//   }
// });

// test('add test 6', async ({ page, browser }) => {
//   try {
//     await page.goto('http://127.0.0.1:7002');
//   } catch (error) {
//     throw new Error('Failed to visit local server. You may not have it running');
//   }
// });



// TODO We want to see an example of your API testing skills. Please write a test that uses the SWAPI API to test the following:

// API Testing
// Use swapi documentation https://swapi.dev/documentation

// test('Use https://swapi.dev/api/people to confirm that there are 82 people in the response', async ({ page }) => {
//   
// });

// test('Use https://swapi.dev/api/people/1 to find the name of Luke's homeworld', async ({ page }) => {
//   
// });

// test('Use https://swapi.dev/api/people/1 with a wookiee encoding to assert the name of the value "whrascwo"', async ({ page }) => {
//   
// });
