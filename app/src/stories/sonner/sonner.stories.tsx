'use client';

import { toast } from 'sonner';

import { Button } from '@/components/ui/button';

function SonnerDemo() {
	return (
		<Button
			variant='outline'
			onClick={() =>
				toast('Event has been created', {
					description: 'Sunday, December 03, 2023 at 9:00 AM',
					action: {
						label: 'Undo',
						onClick: () => console.log('Undo'),
					},
				})
			}
		>
			Show Toast
		</Button>
	);
}

import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SonnerDemo> = {
	title: 'Sonner',
	component: SonnerDemo,
};

export default meta;

type Story = StoryObj<typeof SonnerDemo>;

export const Default: Story = {
	render: () => <SonnerDemo />,
};
