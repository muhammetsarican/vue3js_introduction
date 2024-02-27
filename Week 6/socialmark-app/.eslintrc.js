// <projectRoot>/.eslintrc.js
module.exports = {
  root: true,
  parserOptions: {
  },
  env: {
    browser: true,
  },
  extends: [
    "plugin:vue/base"
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  rules: {
    "vue/multi-word-component-names": ["error", {
      "ignores": ["index"]
    }]
  },
}