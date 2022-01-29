module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testPathIgnorePatterns: ['.*/tests/fixtures/'],
  testRegex: '.*\\.test\\.(tsx?|jsx?)$',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      '@swc/jest',
      {
        sourceMaps: true,
      },
    ],
  },
  verbose: true,
};
