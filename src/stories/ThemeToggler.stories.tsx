import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeToggler } from '../components/ThemeToggler/ThemeToggler';

export default {
  title: 'Example/ThemeTogglerButton',
  component: ThemeToggler,
} as ComponentMeta<typeof ThemeToggler>;

const Template: ComponentStory<typeof ThemeToggler> = () => (
  <ThemeToggler
    onToggleTheme={() => {
      console.log('toggle theme');
    }}
  />
);

export const ThemeTogglerButton = Template.bind({});
