import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from '../src/components/theme-provider';
import '../src/assets/globals.css';
import { Toaster } from 'sonner';

const withThemeProvider = (Story: any) => (
	<ThemeProvider>
		<Story />
		<Toaster />
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
