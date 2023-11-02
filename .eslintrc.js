module.exports = {
  extends: ['custom/nest'],
  ignorePatterns: ['dist/', 'tsup.config.ts'],
  rules: {
    'no-new': 'off',
  },
};
