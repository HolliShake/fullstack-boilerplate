import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@/components/theme-provider';
import '../src/styles/globals.css';

const withThemeProvider = (Story: any) => (
	<ThemeProvider>
		<Story />
	</ThemeProvider>
);

const preview: Preview = {
	decorators: [withThemeProvider],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
