import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button as ButtonComponent } from '../components/Button/Button';

export default {
  title: 'Example/Button',
  component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = () => (
  <ButtonComponent>Click</ButtonComponent>
);

export const Button = Template.bind({});
