import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>

function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn("w-[60%]", className)}
      {...props}
    />
  )
}

import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SliderDemo> = {
  title: 'Slider',
  component: SliderDemo,
};

export default meta;

type Story = StoryObj<typeof SliderDemo>;

export const Default: Story = {
  render: () => <SliderDemo />,
};