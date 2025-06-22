// Playwright test: Get Users
const { test, expect } = require('@playwright/test');

test.describe('GET /api/users', () => {
  test('should list users (paginated)', async ({ request }) => {
    const response = await request.get('users?page=1');
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body).toHaveProperty('data');
    expect(Array.isArray(body.data)).toBe(true);
  });

  test('should get single user by ID', async ({ request }) => {
    const response = await request.get('users/2');
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body.data).toHaveProperty('id', 2);
  });

  test('should return 404 for non-existent user', async ({ request }) => {
    const response = await request.get('users/9999');
    expect(response.status()).toBe(404);
  });
});
