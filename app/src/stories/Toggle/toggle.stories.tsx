import { Bold } from 'lucide-react';

import { Toggle } from '@/components/ui/toggle';

function ToggleDemo() {
	return (
		<Toggle aria-label='Toggle italic'>
			<Bold className='h-4 w-4' />
		</Toggle>
	);
}

import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ToggleDemo> = {
	title: 'Toggle',
	component: ToggleDemo,
};

export default meta;

type Story = StoryObj<typeof ToggleDemo>;

export const Default: Story = {
	render: () => <ToggleDemo />,
};
