import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Loader as LoaderComponent } from '../components/Loader/Loader';

export default {
  title: 'Example/Loader',
  component: LoaderComponent,
} as ComponentMeta<typeof LoaderComponent>;

const Template: ComponentStory<typeof LoaderComponent> = () => (
  <LoaderComponent />
);

export const Loader = Template.bind({});
