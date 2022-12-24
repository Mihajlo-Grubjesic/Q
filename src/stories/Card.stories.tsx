import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Card as CardComponent } from "../components/Card/Card";

export default {
  title: "Example/Card",
  component: CardComponent,
  args: {
    title: "Card title",
    subtitle: "Card Subtitle",
    content: <div>Card content</div>,
  },
} as ComponentMeta<typeof CardComponent>;

const Template: ComponentStory<typeof CardComponent> = (args) => (
  <div style={{ width: "400px" }}>
    <CardComponent {...args} />
  </div>
);

export const Card = Template.bind({});
