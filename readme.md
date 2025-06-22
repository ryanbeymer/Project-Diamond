# ReqRes API Testing with Playwright

## Overview

This project contains automated API tests for the [ReqRes](https://reqres.in/) API using Playwright with JavaScript. ReqRes is a hosted REST API service that provides sample data for testing, prototyping, and development purposes.

## About ReqRes API

ReqRes is a free online REST API that:

- Provides fake JSON data for testing
- Supports all standard HTTP methods (GET, POST, PUT, PATCH, DELETE)
- Is CORS-enabled and returns JSON responses
- Uses sample user and resource data (Pantone colors)
- Requires no authentication for basic endpoints
- Does not store request data permanently

**Base URL:** `https://reqres.in/api`

## Prerequisites

Before running the tests, ensure you have the following installed:

- Node.js (version 14 or higher)
- npm or yarn package manager

## Installation

1. Clone this repository:

```bash
git clone <repository-url>
cd reqres-playwright-tests
```

2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers:

```bash
npx playwright install
```

## Project Structure

```
├── tests/
│   ├── users/
│   │   ├── get-users.spec.js
│   │   ├── create-user.spec.js
│   │   ├── update-user.spec.js
│   │   └── delete-user.spec.js
│   ├── auth/
│   │   ├── login.spec.js
│   │   └── register.spec.js
│   └── resources/
│       └── resources.spec.js
├── utils/
│   ├── api-client.js
│   ├── test-data.js
│   └── helpers.js
├── config/
│   └── test-config.js
├── playwright.config.js
├── package.json
└── README.md
```

## API Endpoints Covered

### Users

- `GET /api/users` - List users (paginated)
- `GET /api/users/{id}` - Get single user
- `POST /api/users` - Create user
- `PUT /api/users/{id}` - Update user (full)
- `PATCH /api/users/{id}` - Update user (partial)
- `DELETE /api/users/{id}` - Delete user

### Authentication

- `POST /api/register` - Register user
- `POST /api/login` - Login user

### Resources

- `GET /api/unknown` - List resources (colors)
- `GET /api/unknown/{id}` - Get single resource

### Delayed Responses

- `GET /api/users?delay=3` - Test delayed responses

## Test Categories

### Functional Tests

- **CRUD Operations**: Testing Create, Read, Update, Delete operations for users
- **Data Validation**: Verifying response schemas and data types
- **Pagination**: Testing list endpoints with page parameters
- **Error Handling**: Testing invalid requests and error responses

### Performance Tests

- **Response Times**: Measuring API response times
- **Delayed Responses**: Testing endpoints with intentional delays

### Negative Tests

- **Invalid IDs**: Testing with non-existent user IDs
- **Invalid Data**: Testing with malformed request bodies
- **Missing Fields**: Testing required field validation

## Running Tests

### Run all tests:

```bash
npm test
```

### Run specific test suite:

```bash
# Run user-related tests
npx playwright test tests/users/

# Run authentication tests
npx playwright test tests/auth/

# Run a specific test file
npx playwright test tests/users/get-users.spec.js
```

### Run tests with specific options:

```bash
# Run tests in headed mode
npx playwright test --headed

# Run tests with specific reporter
npx playwright test --reporter=html

# Run tests in debug mode
npx playwright test --debug
```

## Test Configuration

The tests are configured in `playwright.config.js` with the following settings:

- **Base URL**: `https://reqres.in/api`
- **Timeout**: 30 seconds per test
- **Retries**: 2 retries on failure
- **Parallel execution**: Enabled
- **Reporters**: HTML, JSON, and console reporters

## Sample Test Cases

### User Management Tests

- Verify user list retrieval with pagination
- Test single user retrieval by ID
- Validate user creation with various data types
- Test user updates (full and partial)
- Verify user deletion
- Test non-existent user scenarios

### Authentication Tests

- Test successful user registration
- Test registration with missing fields
- Test successful login
- Test login with invalid credentials

### Data Validation Tests

- Verify response status codes
- Validate JSON response schemas
- Test response headers
- Verify data types and formats

## Environment Configuration

Create a `.env` file for environment-specific configurations:

```env
BASE_URL=https://reqres.in/api
TIMEOUT=30000
RETRIES=2
```

## Reporting

Test results are generated in multiple formats:

- **HTML Report**: `playwright-report/index.html`
- **JSON Report**: `test-results/results.json`
- **Console Output**: Real-time test execution status

To view the HTML report:

```bash
npx playwright show-report
```

## Continuous Integration

This project includes GitHub Actions workflow for automated testing:

```yaml
# .github/workflows/tests.yml
name: Playwright Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npx playwright install
      - run: npm test
```

## Best Practices

1. **Test Isolation**: Each test should be independent and not rely on other tests
2. **Data Management**: Use dynamic test data to avoid conflicts
3. **Assertions**: Include comprehensive assertions for status codes, headers, and response bodies
4. **Error Handling**: Test both success and failure scenarios
5. **Performance**: Monitor response times and set reasonable timeouts

## Troubleshooting

### Common Issues

1. **Network Timeouts**: Increase timeout values in configuration
2. **Rate Limiting**: Add delays between tests if needed
3. **Flaky Tests**: Use proper waits and retries

### Debug Mode

Run tests in debug mode for step-by-step execution:

```bash
npx playwright test --debug tests/users/get-users.spec.js
```

## Code Formatting

This project uses [Prettier](https://prettier.io/) for consistent code formatting.

### Available Scripts

```bash
# Format all files
npm run format

# Check formatting without making changes
npm run format:check

# Format only test files
npm run format:tests
```

### Editor Integration

The project includes VS Code settings (`.vscode/settings.json`) that will:

- Automatically format files on save
- Use Prettier as the default formatter
- Format on paste

### Pre-commit Hooks

The project uses Husky and lint-staged to automatically format files before committing:

- All staged `.js`, `.json`, and `.md` files are automatically formatted
- Pre-commit hook ensures consistent formatting across the codebase

### Configuration

Prettier configuration is defined in `.prettierrc`:

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "lf"
}
```

## Contributing

1. Create a feature branch
2. Add tests following the existing patterns
3. Ensure all tests pass and code is properly formatted
4. Submit a pull request

## Resources

- [ReqRes API Documentation](https://reqres.in/)
- [Playwright Documentation](https://playwright.dev/)
- [API Testing Best Practices](https://playwright.dev/docs/test-api-testing)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
