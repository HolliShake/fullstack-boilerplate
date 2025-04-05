import type { Meta, StoryObj } from '@storybook/react';
import { AlertDialog, AlertDialogTrigger, AlertDialogContent } from '@/components/ui/alert-dialog';
import { ThemeProvider } from '@/components/theme-provider';
import { useState } from 'react';

const meta: Meta<typeof AlertDialog> = {
  title: 'AlertDialog',
  component: AlertDialog,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  args: {},
  render: () => {
    const [open, setOpen] = useState(false);
    return(
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
                <button className="btn">Open Alert Dialog</button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <h2 className="text-lg font-bold">Alert Dialog Title</h2>
                <p>This is the content of the alert dialog.</p>
                <div className="flex justify-end">
                <button className="btn" onClick={() => setOpen(false)}>Cancel</button>
                <button className="btn ms-2">Confirm</button>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    );
  },
};
