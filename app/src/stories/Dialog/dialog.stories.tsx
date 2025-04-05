import * as React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Meta, StoryObj } from '@storybook/react';

function DialogDemo() {
	const [open, setOpen] = React.useState(false);

	return (
		<>
			<Button onClick={() => setOpen(true)}>Open Dialog</Button>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent>
					<h2 className='text-lg font-semibold'>Dialog Title</h2>
					<p className='mt-2'>This is a simple dialog example.</p>
					<div className='mt-4 flex justify-end'>
						<Button variant='outline' onClick={() => setOpen(false)}>
							Close
						</Button>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
}

const meta: Meta<typeof DialogDemo> = {
	title: 'Dialog',
	component: DialogDemo,
};

export default meta;

type Story = StoryObj<typeof DialogDemo>;

export const Default: Story = {
	render: () => <DialogDemo />,
};
