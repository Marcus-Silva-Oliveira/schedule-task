import { ButtonComponent } from '../../../button';
import { ModalProps } from './types';
import * as S from './styles';
import ops from '../../../../assets/Images/modal-wrong/ops-wrong.jpg';

export const ModalComponent: React.FC<ModalProps> = (props) => {
  return (
    <S.ContentContainer>
      <S.DivsContainer>
        <S.ImageDiv>
          <img src={ops} />
        </S.ImageDiv>
        <S.TextDiv>
          <h1>
            Ops!
            <br /> Não foi possível concluir a operação
          </h1>
          <ButtonComponent
            content="Entendi"
            onClick={props.onClose}
            color="#ffffff"
            background="#1294F2"
            fontSize="25px"
          />
        </S.TextDiv>
      </S.DivsContainer>
    </S.ContentContainer>
  );
};
