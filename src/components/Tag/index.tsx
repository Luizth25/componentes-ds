import { TTagProps } from 'components/Tag/types';
import React from 'react';
import { StyledTag } from './styles';

export const Tag = ({ text }: TTagProps) => <StyledTag>{text}</StyledTag>;
