import React from 'react';
import { StyledCard } from './styled';
import { TCardProps } from './types';

export const Card = ({ children }: TCardProps) => (
  <StyledCard>{children}</StyledCard>
);
