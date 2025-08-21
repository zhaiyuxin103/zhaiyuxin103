/**
 * @filename: lint-staged.config.mts
 * @type {import('lint-staged').Configuration}
 */
export default {
  '*.{js,jsx,ts,tsx,json,css,scss,md,mdx,html,yml,yaml,yml.lock,yaml.lock}': [
    'prettier . --write',
  ],
};
