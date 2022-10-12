import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TAbButtomProps } from '../src/components/AbButtom/types';
//Aqui e a storia do nosso componente

import { AbButtom } from '../src/components/AbButtom';

export default {
  //aqui eu digo o nome da pasta aonde vai ficar o componente
  title: 'Components/AbBottom',
  //aqui o nome do componente que estou ultilizando
  component: AbButtom,
  //aqui eu digo o tipo do componente meta
} as ComponentMeta<typeof AbButtom>;

//o template é um componentStory que recebe uma arrow function que retorna o componente AbBottom renderizado
//o template base do botao
const Template: ComponentStory<typeof AbButtom> = args => (
  <AbButtom {...args} />
);

//criamos uma const que recebe o template.bind do argumentos
export const Primario = Template.bind({});

Primario.args = {
  text: 'Ab Botão Primário',
  tipo: 'primary',
} as TAbButtomProps;

export const Secundario = Template.bind({});

Secundario.args = {
  text: 'Ab Botão Secundario',
  tipo: 'secondary',
} as TAbButtomProps;
