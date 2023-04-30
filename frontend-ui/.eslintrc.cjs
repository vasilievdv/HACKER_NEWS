module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
     version: "detect",
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/prop-types': 0,
    'prefer-const': 0,
    '@typescript-eslint/no-unsafe-argument': 2,
    '@typescript-eslint/no-unsafe-assignment': "off",
    '@typescript-eslint/no-unsafe-call': 2,
    '@typescript-eslint/no-unsafe-member-access': 2,
    '@typescript-eslint/no-unsafe-return': 2,
    '@typescript-eslint/no-explicit-any': "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "import/default": "off",
  },
};
