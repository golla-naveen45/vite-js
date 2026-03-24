module.exports = {
  extends: [
    'stylelint-config-standard-scss',
  ],
  plugins: [
    'stylelint-scss',
    'stylelint-order',
  ],
  rules: {
    /* Common real-world Drupal rules */
    'selector-class-pattern': null,
    'no-descending-specificity': null,

    /* SCSS flexibility */
    'scss/dollar-variable-pattern': null,
    'scss/at-import-no-partial-leading-underscore': null,

    /* Nesting */
    'max-nesting-depth': 4,

    /* Order */
    'order/properties-alphabetical-order': true,
  },
  ignoreFiles: [
    '**/*.min.css',
    '**/dist/**',
    '**/node_modules/**',
  ],
};
