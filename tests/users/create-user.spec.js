// Playwright test: Create User
const { test, expect } = require('@playwright/test');

test.describe('POST /api/users', () => {
  test('should create a user', async ({ request }) => {
    const response = await request.post('users', {
      data: { name: 'John Doe', job: 'leader' },
    });
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('createdAt');
  });

  test('should create user with empty data', async ({ request }) => {
    const response = await request.post('users', { data: {} });
    // ReqRes API accepts empty data and still creates a user
    expect(response.status()).toBe(201);
  });
});
