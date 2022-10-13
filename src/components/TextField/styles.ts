import styled from 'styled-components';

export const StyledInput = styled.input`
  font-size: 16px;
  line-height: 24px;
  color: #002f52;
  padding: 8px 24px;
  border: 1px solid #002f52;
  border-radius: 45px;
  &:focus {
    outline: none;
  }
  width: 100%;
  box-sizing: border-box;
`;

export const StyledLabel = styled.label`
  color: #002f52;
  margin-left: 16px;
  margin-bottom: 8px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
`;

export const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
