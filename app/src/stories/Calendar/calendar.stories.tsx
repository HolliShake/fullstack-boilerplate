import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Calendar } from '@/components/ui/calendar';

const CalendarStory = () => {
	const [date, setDate] = React.useState(new Date());

	const onChange = (newDate: Date) => {
		setDate(newDate);
	};

	return (
		<div>
			<h2>Select a Date</h2>
			<Calendar selected={date} onDayClick={onChange} />
			<p>Selected Date: {date.toDateString()}</p>
		</div>
	);
};

const meta: Meta<typeof CalendarStory> = {
	title: 'Calendar',
	component: CalendarStory,
};

export default meta;

type Story = StoryObj<typeof CalendarStory>;

export const Default: Story = {
	render: () => <CalendarStory />,
};
