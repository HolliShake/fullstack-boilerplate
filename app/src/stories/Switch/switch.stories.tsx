import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}

import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SwitchDemo> = {
  title: 'Switch',
  component: SwitchDemo,
};

export default meta;

type Story = StoryObj<typeof SwitchDemo>;

export const Default: Story = {
  render: () => <SwitchDemo />,
};