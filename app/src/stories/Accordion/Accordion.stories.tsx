import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { ThemeProvider } from '@/components/theme-provider';

const meta: Meta<typeof Accordion> = {
	title: 'Accordion',
	component: Accordion,
	decorators: [
		Story => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
	args: {}, // Add empty args object to fix the type error
	render: () => (
		<Accordion type='single' collapsible>
			<AccordionItem value='item-1'>
				<AccordionTrigger>Item 1</AccordionTrigger>
				<AccordionContent>Content for Item 1</AccordionContent>
			</AccordionItem>
			<AccordionItem value='item-2'>
				<AccordionTrigger>Item 2</AccordionTrigger>
				<AccordionContent>Content for Item 2</AccordionContent>
			</AccordionItem>
			<AccordionItem value='item-3'>
				<AccordionTrigger>Item 3</AccordionTrigger>
				<AccordionContent>Content for Item 3</AccordionContent>
			</AccordionItem>
		</Accordion>
	),
};
