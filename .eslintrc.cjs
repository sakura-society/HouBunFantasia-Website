/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  lintOnSave: false,
  
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
  ],
  rules: {
    //关闭组件命名规则
    "vue/multi-word-component-names": "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
};
