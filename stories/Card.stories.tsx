import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from '../src';

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = () => (
  <Card>
    <h1>Hello i'm a card</h1>
  </Card>
);

export const Default = Template.bind({});
