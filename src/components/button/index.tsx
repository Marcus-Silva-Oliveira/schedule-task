import React from 'react';
import { ButtonProps } from './types';
import * as S from './styles';

export const ButtonComponent: React.FC<ButtonProps> = (props) => {
  return (
    <S.StyledButton
      onClick={(): void => props.onClick()}
      style={{ background: props.background, color: props.color }}
    >
      {props.content}
    </S.StyledButton>
  );
};
