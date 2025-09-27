// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
		assets: ['./assets/fonts'], // Rodar o comando react npx react-native link
		  ignores: ['dist/*'],
  },
]);
