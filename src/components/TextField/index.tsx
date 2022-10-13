import React from 'react';
import * as s from './styles';
import { TTextFieldProps } from './types';

export const TextField = ({
  label,
  onChange,
  value,
  type,
}: TTextFieldProps) => {
  return (
    <s.TextFieldContainer>
      <s.StyledLabel>{label}</s.StyledLabel>
      <s.StyledInput
        type={type}
        value={value}
        placeholder="seuemail@example.com.br"
        onChange={event => onChange(event.target.value)}
      />
    </s.TextFieldContainer>
  );
};
