
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';
import { ThemeProvider } from '@/components/theme-provider';

const meta = {
  title: 'Button',
  component: Button,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

// variants: default, destructive, outline, secondary, ghost, link

export const Default: Story = {
  args: {
    children: 'Default',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link',
  },
};
