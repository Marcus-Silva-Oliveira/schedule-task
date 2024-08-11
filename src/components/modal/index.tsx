import { ButtonComponent } from '../button';
import { ModalProps } from './types';
import * as S from './styles';
import ops from '../../assets/Images/modal-wrong/ops-wrong.jpg';

export const ModalComponent: React.FC<ModalProps> = (props) => {
  return (
    <S.ContentContainer style={{ display: props.showModal }}>
      <S.DivsContainer>
        <S.ImageDiv>
          <img src={ops} />
        </S.ImageDiv>
        <S.TextDiv>
          <h1>{props.title}</h1>
          <h2 style={{ color: props.textColor }}>{props.missingFields}</h2>
          <ButtonComponent
            onClick={props.onClose}
            content={props.content}
            color="#ffffff"
            background="#1294F2"
            fontSize="20px"
          />
        </S.TextDiv>
      </S.DivsContainer>
    </S.ContentContainer>
  );
};
