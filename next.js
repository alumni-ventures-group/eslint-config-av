require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: [
    "next",
    "prettier",
    "next/core-web-vitals",
    "plugin:cypress/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:react-hooks/recommended"
  ],
  plugins: ["jest", "cypress"],
  rules: {
    "@next/next/no-img-element": "off",
    "react/display-name": "off",
    "react/jsx-key": "off",
    "jest/expect-expect": [
      "error",
      { "assertFunctionNames": ["expect", "**.should", "cy.shouldBeLoggedInAs"] }
    ]
  }
}
