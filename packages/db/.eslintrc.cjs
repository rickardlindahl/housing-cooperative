/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  extends: ["custom"],
  parserOptions: {
    project: "./tsconfig.json",
  },
};

module.exports = config;
