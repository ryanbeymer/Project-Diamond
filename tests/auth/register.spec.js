// Playwright test: Register
const { test, expect } = require('@playwright/test');

test.describe('POST /api/register', () => {
  test('should register successfully', async ({ request }) => {
    const response = await request.post('register', {
      data: { email: 'eve.holt@reqres.in', password: 'pistol' },
    });
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('token');
  });

  test('should fail with missing password', async ({ request }) => {
    const response = await request.post('register', {
      data: { email: 'sydney@fife' },
    });
    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body).toHaveProperty('error');
  });
});
