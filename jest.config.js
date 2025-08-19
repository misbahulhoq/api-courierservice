/** @type {import('ts-jest').JestConfigWithTsJest} **/

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  maxConcurrency: 1,
  coverageProvider: "v8",
  coverageDirectory: "./coverage",
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+.ts?$": "ts-jest",
  },
  testMatch: ["**/**/*.test.ts"],
  rootDir: "./src",
};
