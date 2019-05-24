// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__mocks__/',
    '/__tests__/',
    '<rootDir>/coverage',
    '<rootDir>/jest',
  ],

  // A map from regular expressions to module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },

  // The path to a module that runs some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['<rootDir>/jest/setup.js'],

  testPathIgnorePatterns: ['/node_modules/', '/.cache/'],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  // testPathIgnorePatterns: ['/node_modules/', '/cytests/'],

  // This option allows use of a custom test runner
  testRunner: 'jest-circus/runner',

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  // testURL: 'http://localhost',

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(js|ts)x?$': '<rootDir>/jest/wrapper.js',
  },

  // Indicates whether each individual test should be reported during the run
  verbose: !!process.env.CI,
};
