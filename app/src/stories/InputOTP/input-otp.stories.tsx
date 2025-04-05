import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp';

function InputOTPDemo() {
	return (
		<InputOTP maxLength={6}>
			<InputOTPGroup>
				<InputOTPSlot index={0} />
				<InputOTPSlot index={1} />
				<InputOTPSlot index={2} />
			</InputOTPGroup>
			<InputOTPSeparator />
			<InputOTPGroup>
				<InputOTPSlot index={3} />
				<InputOTPSlot index={4} />
				<InputOTPSlot index={5} />
			</InputOTPGroup>
		</InputOTP>
	);
}

import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InputOTPDemo> = {
	title: 'InputOTP',
	component: InputOTPDemo,
};

export default meta;

type Story = StoryObj<typeof InputOTPDemo>;

export const Default: Story = {
	render: () => <InputOTPDemo />,
};
