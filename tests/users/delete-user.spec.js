// Playwright test: Delete User
const { test, expect } = require('@playwright/test');

test.describe('DELETE /api/users/{id}', () => {
  test('should delete user', async ({ request }) => {
    const response = await request.delete('users/2');
    expect(response.status()).toBe(204);
  });
});
