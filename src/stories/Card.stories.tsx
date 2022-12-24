import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Card as CardComponent } from "../components/Card/Card";

export default {
  title: "Example/Card",
  component: CardComponent,
} as ComponentMeta<typeof CardComponent>;

const Template: ComponentStory<typeof CardComponent> = () => (
  <div style={{ width: "400px" }}>
    <CardComponent />;
  </div>
);

export const Card = Template.bind({});
