import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardDetails as CardDetailsComponent } from '../components/CardDetails/CardDetails';

export default {
  title: 'Example/Card',
  component: CardDetailsComponent,
  args: {
    title: 'Card title',
    subtitle: 'Card Subtitle',
    content: <div>Card content</div>,
  },
} as ComponentMeta<typeof CardDetailsComponent>;

const Template: ComponentStory<typeof CardDetailsComponent> = (args) => (
  <CardDetailsComponent {...args} />
);

export const CardDetails = Template.bind({});
