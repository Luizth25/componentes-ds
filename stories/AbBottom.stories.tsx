import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
//Aqui e a storia do nosso componente

import { AbButtom } from '../src';

export default {
  //aqui eu digo o nome da pasta aonde vai ficar o componente
  title: 'Componets/AbBottom',
  //aqui o nome do componente que estou ultilizando
  component: AbButtom,
  //aqui eu digo o tipo do componente meta
} as ComponentMeta<typeof AbButtom>;

//o template é um componentStory que recebe uma arrow function que retorna o componente AbBottom renderizado
//o template base do botao
const Template: ComponentStory<typeof AbButtom> = () => <AbButtom />;

//criamos uma const que recebe o template.bind do argumentos
export const Primario = Template.bind({});
