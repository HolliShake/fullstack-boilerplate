import { Textarea } from "@/components/ui/textarea"

export function TextareaDemo() {
  return <Textarea placeholder="Type your message here." />
}

import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextareaDemo> = {
  title: 'Textarea',
  component: TextareaDemo,
};

export default meta;

type Story = StoryObj<typeof TextareaDemo>;

export const Default: Story = {
  render: () => <TextareaDemo />,
};