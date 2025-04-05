import type { Meta, StoryObj } from '@storybook/react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'; // Assuming you have a Carousel component
import { ThemeProvider } from '@/components/theme-provider';
import { CardContent, Card } from '@/components/ui/card';

const meta: Meta<typeof Carousel> = {
  title: 'Carousel',
  component: Carousel,
  decorators: [
    (Story) => (
      <div className='block w-full max-w-full'>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {

  },
  render: () => (
    <Carousel className="w-full max-w-md">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className='w-full h-full'>
                <CardContent className="flex items-center justify-center p-6 aspect-square">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};
