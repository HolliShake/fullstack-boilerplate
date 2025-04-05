import eslint from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import { dirname } from 'path';
import tseslint from 'typescript-eslint';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

export default tseslint.config(
	{
		ignores: ['eslint.config.mjs'],
	},
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	eslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	eslintPluginPrettierRecommended,
	{
		languageOptions: {
			globals: {
				...globals.node,
				...globals.jest,
			},
			ecmaVersion: 5,
			sourceType: 'module',
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	{
		rules: {
			'@typescript-eslint/interface-name-prefix': 'off',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-floating-promises': 'warn',
			'@typescript-eslint/no-unsafe-argument': 'warn',
			semi: ['error', 'always'],
			quotes: ['error', 'single', { avoidEscape: true }],
			'prettier/prettier': [
				'error',
				{
					singleQuote: true,
					jsxSingleQuote: true,
					semi: true,
					printWidth: 200,
					tabWidth: 4,
					useTabs: true,
					quoteProps: 'preserve',
					arrowParens: 'avoid',
					proseWrap: 'never',
					trailingComma: 'all',
					bracketSpacing: true,
					importOrder: ['^@?\\w', '^[./]'],
					importOrderSeparation: true,
					importOrderSortSpecifiers: true,
				},
			],
		},
	}
);
