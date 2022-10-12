import { TAbButtomProps } from 'components/AbButtom/types';
import styled, { css } from 'styled-components';

export const StyledBottom = styled.button<TAbButtomProps>`
  background: ${({ tipo }: TAbButtomProps) =>
    tipo === 'primary' ? '#eb9b00' : '#FFF'};
  padding: 16px 32px;
  border: 2px solid #eb9b00;
  color: ${({ tipo }: TAbButtomProps) =>
    tipo === 'primary' ? '#FFF' : '#eb9b00'};
  font-size: 20px;
  cursor: pointer;

  ${({ tipo }: TAbButtomProps) =>
    tipo === 'primary'
      ? css`
          &&:hover {
            background: #b87900;
            border: 2px solid #b87900;
          }
        `
      : css`
          &&:hover {
            background: #fff;
            border: 2px solid #b87900;
            color: #b87900;
          }
        `};
`;
