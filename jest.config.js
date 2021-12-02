const path = require('path');

module.exports = {
  roots: ['<rootDir>/dist'],
  testMatch: ['**/__tests__/**/*.+(jsx|js)', '**/?(*.)+(spec|test).+(jsx|js)'],
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/dist/$1',
    '\\.(css|less|scss|sass)$': path.resolve(__dirname, './dist/styleMock.js'),
  },
  testEnvironment: 'jsdom'
};
