import { Input } from "@/components/ui/input"

export function InputDemo() {
  return <Input type="email" placeholder="Email" />
}

import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InputDemo> = {
  title: 'Input',
  component: InputDemo,
};

export default meta;

type Story = StoryObj<typeof InputDemo>;

export const Default: Story = {
  render: () => <InputDemo />,
};