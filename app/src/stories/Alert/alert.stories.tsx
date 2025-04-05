import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { ThemeProvider } from '@/components/theme-provider';

const meta: Meta<typeof Alert> = {
	title: 'Alert',
	component: Alert,
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'destructive'],
		},
	},
	decorators: [
		Story => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
	args: {
		variant: 'default', // Example variant
	},
	render: (args: any) => (
		<Alert {...args}>
			<AlertTitle>Alert Title</AlertTitle>
			<AlertDescription>This is the description of the alert.</AlertDescription>
		</Alert>
	),
};

export const Destructive: Story = {
	args: {
		variant: 'destructive',
	},
	render: (args: any) => (
		<Alert {...args}>
			<AlertTitle>Alert Title</AlertTitle>
			<AlertDescription>This is the description of the alert.</AlertDescription>
		</Alert>
	),
};
