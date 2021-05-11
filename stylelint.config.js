/*eslint-env node*/

module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-order', 'stylelint-config-rational-order'],
  plugins: ['stylelint-prettier', 'stylelint-order', 'stylelint-config-rational-order/plugin'],
  rules: {
    'no-descending-specificity': null,
  },
};
