import React, { useState } from 'react';
import * as s from './styles';
import { TOptionGroup, TOptionGroupProps } from './types';

export const OptionGroup = ({
  options,
  defaultValue,
  onChange,
}: TOptionGroupProps) => {
  const [clicked, setClicked] = useState<TOptionGroup | null>(
    defaultValue ?? null
  );
  const whenSelecting = (option: TOptionGroup): void => {
    setClicked(option);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <>
      {options.map(option => (
        <s.StyledSection
          onClick={() => whenSelecting(option)}
          selected={clicked?.id === option.id}
          key={option.id}
        >
          <header>{option.title}</header>
          <div>
            <strong>{option.body}</strong>
          </div>
          <footer>{option.footer}</footer>
        </s.StyledSection>
      ))}
    </>
  );
};
