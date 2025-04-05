import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from '@/components/ui/aspect-ratio'; // Assuming you have an AspectRatio component
import { ThemeProvider } from '@/components/theme-provider';

const meta: Meta<typeof AspectRatio> = {
  title: 'AspectRatio',
  component: AspectRatio,
  argTypes: {
    ratio: {
      control: 'number',
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story ratio={16 / 9} />
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  args: {
    ratio: 16 / 9, // Example aspect ratio
    className: 'bg-blue-500', // Changed color to blue
  },
};

export const Square: Story = {
  args: {
    ratio: 1,
    className: 'bg-green-500', // Changed color to green
  },
};

export const Portrait: Story = {
  args: {
    ratio: 16 / 9,
    className: 'bg-yellow-500', // Changed color to yellow
  },
};
