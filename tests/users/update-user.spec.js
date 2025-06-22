// Playwright test: Update User
const { test, expect } = require('@playwright/test');

test.describe('PUT /api/users/{id}', () => {
  test('should update user (full)', async ({ request }) => {
    const response = await request.put('users/2', {
      data: { name: 'Jane Doe', job: 'manager' },
    });
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body).toHaveProperty('updatedAt');
  });
});

test.describe('PATCH /api/users/{id}', () => {
  test('should update user (partial)', async ({ request }) => {
    const response = await request.patch('users/2', {
      data: { job: 'developer' },
    });
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body).toHaveProperty('updatedAt');
  });
});
