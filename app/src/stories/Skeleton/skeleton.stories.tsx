import { Skeleton } from '@/components/ui/skeleton';

function SkeletonDemo() {
	return (
		<div className='flex items-center space-x-4'>
			<Skeleton className='h-12 w-12 rounded-full' />
			<div className='space-y-2'>
				<Skeleton className='h-4 !w-[250px]' />
				<Skeleton className='h-4 !w-[200px]' />
			</div>
		</div>
	);
}

import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SkeletonDemo> = {
	title: 'Skeleton',
	component: SkeletonDemo,
};

export default meta;

type Story = StoryObj<typeof SkeletonDemo>;

export const Default: Story = {
	render: () => <SkeletonDemo />,
};
