import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { OptionGroup } from '../src';
import { TOptionGroupProps } from '../src/components/OptionGroup/types';

export default {
  title: 'Components/OptionGroup',
  component: OptionGroup,
} as ComponentMeta<typeof OptionGroup>;

const Template: ComponentStory<typeof OptionGroup> = args => (
  <OptionGroup {...args} />
);

export const Default = Template.bind({});

Default.args = {
  options: [
    {
      id: 1,
      title: 'E-book',
      body: 'R$ 00,00',
      footer: '.pdf, .epub, .mob',
    },
    {
      id: 2,
      title: 'Impresso',
      body: 'R$ 00,00',
      footer: '.pdf, .epub, .mob',
    },
    {
      id: 3,
      title: ' impresso + E-book',
      body: 'R$ 00,00',
      footer: '.pdf, .epub, .mob',
    },
  ],
} as TOptionGroupProps;
