module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-clean-order',
    'stylelint-config-css-modules',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'function-no-unknown': null,
    'scss/function-no-unknown': null,
    'color-no-hex': true,
    'selector-class-pattern': '^[A-Za-z0-9]+$',

    // scss @if issue fix
    'at-rule-empty-line-before': null,
  },
};
