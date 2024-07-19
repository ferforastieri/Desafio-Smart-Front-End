module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    moduleNameMapper: {
      '^@components/(.*)$': '<rootDir>/src/components/$1',
      '^@utils/(.*)$': '<rootDir>/src/utils/$1',
      // Adicione outros aliases conforme necessário
    },
    moduleDirectories: ['node_modules', 'src'],
    testPathIgnorePatterns: ['/node_modules/', '/build/'],
  };
  