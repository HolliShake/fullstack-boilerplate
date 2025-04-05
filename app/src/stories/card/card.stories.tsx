import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Assuming you have a Card component
import { ThemeProvider } from '@/components/theme-provider';

const meta: Meta<typeof Card> = {
	title: 'Card',
	component: Card,
	decorators: [
		Story => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
	args: {
		title: 'Card Title',
		content: 'This is a sample card content.',
	},
	render: args => (
		<Card {...args}>
			<CardHeader>
				<CardTitle>Card Title</CardTitle>
			</CardHeader>
			<CardContent className='p-4'>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus fuga aperiam, nemo reiciendis itaque recusandae quo est! Incidunt iste cumque a, magni quod asperiores hic
				exercitationem quos, aut quas id?
			</CardContent>
		</Card>
	),
};
