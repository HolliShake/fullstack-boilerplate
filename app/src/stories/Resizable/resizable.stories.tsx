import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
  
function ResizableDemo() {
    return (
      <ResizablePanelGroup
        direction="horizontal"
        className="max-w-md rounded-lg border md:min-w-[450px]"
      >
        <ResizablePanel defaultSize={50}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">One</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={25}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Two</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={75}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Three</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    )
  }

  import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ResizableDemo> = {
  title: 'Resizable',
  component: ResizableDemo,
};

export default meta;

type Story = StoryObj<typeof ResizableDemo>;

export const Default: Story = {
  render: () => <ResizableDemo />,
};
