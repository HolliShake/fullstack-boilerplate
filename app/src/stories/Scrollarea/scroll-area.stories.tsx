import React from 'react';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

const ScrollAreaDemo: React.FC = () => {
	return (
		<ScrollArea className='h-72 w-48 rounded-md border'>
			<div className='p-4'>
				<h4 className='mb-4 text-sm font-medium leading-none'>Tags</h4>
				{tags.map(tag => (
					<>
						<div key={tag} className='text-sm'>
							{tag}
						</div>
						<Separator className='my-2' />
					</>
				))}
			</div>
		</ScrollArea>
	);
};

import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ScrollAreaDemo> = {
	title: 'ScrollArea',
	component: ScrollAreaDemo,
};

export default meta;

type Story = StoryObj<typeof ScrollAreaDemo>;

export const Default: Story = {
	render: () => <ScrollAreaDemo />,
};
