// Playwright test: Login
const { test, expect } = require('@playwright/test');

test.describe('POST /api/login', () => {
  test('should login successfully', async ({ request }) => {
    const response = await request.post('/login', {
      data: { email: 'eve.holt@reqres.in', password: 'cityslicka' }
    });
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body).toHaveProperty('token');
  });

  test('should fail with missing password', async ({ request }) => {
    const response = await request.post('/login', {
      data: { email: 'eve.holt@reqres.in' }
    });
    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body).toHaveProperty('error');
  });
});
