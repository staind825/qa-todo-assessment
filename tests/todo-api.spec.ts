import { test, expect } from '@playwright/test';

// API Testing
// Use swapi documentation https://swapi.dev/documentation

test('Use https://swapi.dev/api/people to confirm that there are 82 people in the response', async ({ request }) => {
  const { count } = await (await request.get('https://swapi.dev/api/people')).json();
  expect(count).toBe(82);
});

test('Use https://swapi.dev/api/people/1 to find the name of Luke\'s homeworld', async ({ request }) => {
  const { homeworld } = await (await request.get('https://swapi.dev/api/people/1')).json();
  const { name } = await (await request.get(homeworld)).json();
  
  expect(name).toBe('Tatooine');
});

test('Use https://swapi.dev/api/people/1 with a wookiee encoding to assert the name of the value "whrascwo"', async ({ request }) => {
  const response = await request.get('https://swapi.dev/api/people/1?format=wookiee');
  const responseBody = await response.json();
  expect(responseBody.whrascwo).toBe('Lhuorwo Sorroohraanorworc');
});
