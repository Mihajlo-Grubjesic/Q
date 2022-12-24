import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input as InputComponent } from "../components/Input/Input";

export default {
  title: "Example/Input",
  component: InputComponent,
  args: {
    placeholder: "Placeholder",
  },
} as ComponentMeta<typeof InputComponent>;

const Template: ComponentStory<typeof InputComponent> = (args) => (
  <InputComponent {...args} />
);

export const Input = Template.bind({});
