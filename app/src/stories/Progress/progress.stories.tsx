'use client';

import * as React from 'react';

import { Progress } from '@/components/ui/progress';

function ProgressDemo() {
	const [progress, setProgress] = React.useState(13);

	React.useEffect(() => {
		const timer = setTimeout(() => setProgress(66), 500);
		return () => clearTimeout(timer);
	}, []);

	return <Progress value={progress} className='w-[60%]' />;
}

import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProgressDemo> = {
	title: 'Progress',
	component: ProgressDemo,
};

export default meta;

type Story = StoryObj<typeof ProgressDemo>;

export const Default: Story = {
	render: () => <ProgressDemo />,
};
