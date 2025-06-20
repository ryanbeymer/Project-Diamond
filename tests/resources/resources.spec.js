// Playwright test: Resources (Colors)
const { test, expect } = require('@playwright/test');

test.describe('GET /api/unknown', () => {
  test('should list resources (colors)', async ({ request }) => {
    const response = await request.get('/unknown');
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body).toHaveProperty('data');
    expect(Array.isArray(body.data)).toBe(true);
  });

  test('should get single resource by ID', async ({ request }) => {
    const response = await request.get('/unknown/2');
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body.data).toHaveProperty('id', 2);
  });

  test('should return 404 for non-existent resource', async ({ request }) => {
    const response = await request.get('/unknown/9999');
    expect(response.status()).toBe(404);
  });
});
