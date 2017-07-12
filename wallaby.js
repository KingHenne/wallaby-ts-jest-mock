module.exports = function() {
  return {
    files: ["tsconfig.json", "src/**/*.ts", "!src/**/*.test.ts"],

    tests: ["src/**/*.test.ts"],

    env: {
      type: "node",
      runner: "node"
    },

    preprocessors: {
      '**/*.js': file => require('babel-core').transform(
        file.content,
        {sourceMap: true, presets: ['babel-preset-jest']})
    },

    testFramework: "jest"
  };
};
