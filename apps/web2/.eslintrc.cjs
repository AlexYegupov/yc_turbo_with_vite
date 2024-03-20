/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/index.js"]
  //extends: ["custom"],
  //parserOptions: {
  //  tsconfigRootDir: __dirname,
  //  project: true,
  //},
  //rules: {
  //  "no-var": "off",
  //  "no-compare-neg-zero": "warn",
  //}
};
