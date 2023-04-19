require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  parser: "@babel/eslint-parser",
  plugins: ["jsx-a11y"],
  env: {
    browser: true,
    node: true,
    mocha: true,
    es6: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 2022
  },
  rules: {
    "import/no-cycle": 0, // don't check for dependency cycles
    indent: ["error", 2], // enforce 2 space indentation
    // enforce max line length of 140, ignore RegExp literals, and URLs
    "max-len": ["error", { code: 140, ignoreRegExpLiterals: true, tabWidth: 2, ignoreUrls: true }],
    "linebreak-style": "off", // allow any line endings \n \r\n
    "arrow-parens": ["error", "always"], // allow no parens around arguments in arrow functions
    curly: ["error", "all"], // require curly braces around if/else statements
    "no-console": ["error", { allow: ["error"] }], // allow console.error only
    "no-with": "error", // disallow with statement
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "to", "hrefLeft", "hrefRight" ],
      "aspects": [ "noHref", "invalidHref", "preferButton" ]
    }],
    "react/jsx-one-expression-per-line": [0, { "allow": "literal" }],
    "no-restricted-syntax": [
      "error",
      {
        "selector": "ForInStatement",
        "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."
      },
      {
        "selector": "LabeledStatement",
        "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."
      }
    ]
  }
};