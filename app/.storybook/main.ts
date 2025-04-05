import { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	// framework: '@storybook/react-webpack5', 👈 Remove this
	framework: '@storybook/nextjs', // 👈 Add this
};

export default config;
