module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/src/__tests__', '<rootDir>/stacks/__tests__'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
