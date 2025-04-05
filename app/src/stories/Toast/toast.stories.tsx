"use client"

import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"

function ToastDemo() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Scheduled: Catch up ",
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        })
      }}
    >
      Add to calendar
    </Button>
  )
}

import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ToastDemo> = {
  title: 'Toast',
  component: ToastDemo,
};

export default meta;

type Story = StoryObj<typeof ToastDemo>;

export const Default: Story = {
  render: () => <ToastDemo />,
};

    