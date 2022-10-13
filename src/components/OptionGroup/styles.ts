import styled from 'styled-components';

export const StyledSection = styled.section<{ selected: boolean }>`
  width: 194px;
  height: 84px;
  background: ${({ selected }) =>
    selected
      ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);'
      : '#fff'};
  border: 1px solid;
  border-color: ${({ selected }) => (selected ? '#002f52' : '#eb9b00')};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin: 10px;
  font-family: sans-serif;
  cursor: pointer;
  header {
    color: ${({ selected }) => (selected ? '#fff' : '#eb9b00')};
    font-size: 12px;
    font-weight: 400;
  }

  strong {
    color: ${({ selected }) => (selected ? '#fff' : '#eb9b00')};
    font-size: 16px;
    font-weight: 400;
  }

  footer {
    color: ${({ selected }) => (selected ? '#fff' : 'rgba(0, 0, 0, 0.54)')};
    font-size: 12px;
    font-weight: 400;
  }
`;
