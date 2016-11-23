module.exports = {
    "env": {
      "browser": true
    },
    "globals": {
      "module": true,
      "require": true,
      "global": true,
    },
    "extends": "eslint:recommended",
    "rules": {
      /* TODO
      "indent": [
            "error",
            2
      ],
      */
      "no-empty": ["error", { "allowEmptyCatch": true }],
      "no-console": 0,
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
          "error",
          "single"
      ],
      "semi": [
          "error",
          "always"
      ],
      "no-unused-vars": [
          "error",
          {
              "args": "all",
              "argsIgnorePattern": "^_\\w+"
          }
      ]
    }
};
