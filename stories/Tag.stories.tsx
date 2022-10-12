import React, { Component } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tag } from '../src/components/Tag';
import { TTagProps } from '../src/components/Tag/types';

export default {
  title: 'components/Tag',
  Component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = args => <Tag {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: 'tag',
} as TTagProps;
