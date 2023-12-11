const path = require('path');

module.exports = {
  // ... outras configurações do webpack

  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader',
        type: 'javascript/auto',
      },
      // ... outras regras se necessário
    ],
  },
};
