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
      'vue/max-attributes-per-line': [
         2,
         {
            singleline: 20,
            multiline: {
               max: 1,
               allowFirstLine: false,
            },
         },
      ],
   },
   parserOptions: {
      parser: 'babel-eslint',
      ecmaVersion: 2020,
      sourceType: 'module',
   },
};
