module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'mocha': true,
    'es6': true,
  },
  'globals': {
    'Cypress': true,
    'cy': true,
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module',
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true,
      'impliedStrict': true,
    }
  },
  'plugins': [
    'react',
  ],
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  'rules': {
    'no-console': [
      'warn',
    ],
    'no-unused-vars': [
      'warn',
    ],
    'react/prop-types': [
      'warn',
    ],
    'import/no-extraneous-dependencies': [
      'error',
    ],
  },
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': __dirname + '/config/webpack.config.dev.js',
      }
    }
  }
}
