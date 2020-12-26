module.exports = {
   root: true,
   env: {
      node: true,
   },
   extends: ['plugin:vue/strongly-recommended'],
   rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'vue/html-indent': 'off',
   },
   parserOptions: {
      parser: 'babel-eslint',
      ecmaVersion: 2020,
      sourceType: 'module',
   },
};
