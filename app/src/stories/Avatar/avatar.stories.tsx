import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'; // Assuming you have an Avatar component
import { ThemeProvider } from '@/components/theme-provider';
import { User } from 'lucide-react';

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
   
  },
  render: (args: any) => (
    <Avatar {...args}>
      <AvatarImage src="https://example.com/avatar.png" />
      <AvatarFallback>
        <User />
      </AvatarFallback>
    </Avatar>
  ),    
};
