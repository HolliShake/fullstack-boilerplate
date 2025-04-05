import { Bold, Italic, Underline } from 'lucide-react';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export function ToggleGroupDemo() {
	return (
		<ToggleGroup type='multiple'>
			<ToggleGroupItem value='bold' aria-label='Toggle bold'>
				<Bold className='h-4 w-4' />
			</ToggleGroupItem>
			<ToggleGroupItem value='italic' aria-label='Toggle italic'>
				<Italic className='h-4 w-4' />
			</ToggleGroupItem>
			<ToggleGroupItem value='strikethrough' aria-label='Toggle strikethrough'>
				<Underline className='h-4 w-4' />
			</ToggleGroupItem>
		</ToggleGroup>
	);
}

import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ToggleGroupDemo> = {
	title: 'ToggleGroup',
	component: ToggleGroupDemo,
};

export default meta;

type Story = StoryObj<typeof ToggleGroupDemo>;

export const Default: Story = {
	render: () => <ToggleGroupDemo />,
};
