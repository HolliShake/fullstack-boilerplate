import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TooltipDemo> = {
  title: 'Tooltip',
  component: TooltipDemo,
};

export default meta;

type Story = StoryObj<typeof TooltipDemo>;

export const Default: Story = {
  render: () => <TooltipDemo />,
};