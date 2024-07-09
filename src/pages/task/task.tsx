import React from 'react';

import * as S from './styles';

export const TaskScreen: React.FC = () => {
  return (
    <>
      <S.TitleContainer>
        <S.PageTitle>Tarefa</S.PageTitle>
      </S.TitleContainer>
      <S.InputContainer>
        <S.Input placeholder="Título:" type="text" />
        <S.Input placeholder="Responsável:" type="text" />
      </S.InputContainer>
      <S.DateAndTypeContainer>
        <S.DateContainer>
          <S.InputDate placeholder="Início" type="date" />
          <S.InputDate placeholder="Início" type="date" />
        </S.DateContainer>
        <S.TypeContainer>
          <S.InputDate placeholder="Início" type="date" />
        </S.TypeContainer>
      </S.DateAndTypeContainer>
    </>
  );
};
