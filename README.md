# eslint-config-av
AV's shared ESLint configuration files

## Usage

### Installation

1. Copy the `.npmrc-sample` file to `.npmrc` in your project directory and add your github token.

2. Install dependencies using npm

```sh
$ npm install eslint @alumni-ventures-group/eslint-config-av --save-dev
```

### Setup

To use eslint-config-av add an eslintrc file and add your desired config or subconfig to the extends property.

#### React

**.eslintrc.js**

```js
module.exports = {
  extends: ["@alumni-ventures-group/eslint-config-av/react"],
};
```
