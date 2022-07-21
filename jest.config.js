module.exports = {
  roots: ['<rootDir>/src'],
  modulePaths: ['node_modules', '<rootDir>/src'],
  testMatch: ['/__tests__//*.+(ts)', '**/?(*.)+(spec|test).+(ts, tsx)'],
  transform: {
    '^.+\\.(js|ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|ts|tsx)?$': 'babel-jest',
  },
};
