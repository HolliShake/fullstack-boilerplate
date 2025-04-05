import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

function LabelDemo() {
	return (
		<div>
			<div className='flex items-center space-x-2'>
				<Checkbox id='terms' />
				<Label htmlFor='terms'>Accept terms and conditions</Label>
			</div>
		</div>
	);
}

import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LabelDemo> = {
	title: 'Label',
	component: LabelDemo,
};

export default meta;

type Story = StoryObj<typeof LabelDemo>;

export const Default: Story = {
	render: () => <LabelDemo />,
};
