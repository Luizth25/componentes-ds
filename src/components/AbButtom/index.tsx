import React from 'react';
import * as s from './styled';
import { TAbButtomProps } from 'components/AbButtom/types';

export const AbButtom = ({
  text,
  tipo = 'primary',
  onClick,
}: TAbButtomProps) => {
  return (
    <s.StyledBottom onClick={onClick} tipo={tipo}>
      {text}
    </s.StyledBottom>
  );
};
