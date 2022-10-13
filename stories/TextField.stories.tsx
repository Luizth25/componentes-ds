import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TextField } from '../src';
import { TTextFieldProps } from '../src/components/TextField/types';

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    label: {
      control: 'text',
    },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = args => (
  <TextField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'exemplo de label',
} as TTextFieldProps;
