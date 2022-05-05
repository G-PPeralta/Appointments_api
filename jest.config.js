module.exports = {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-node',
  testMatch: [
    '**/__tests__/**/*.test.js?(x)',
  ],
};