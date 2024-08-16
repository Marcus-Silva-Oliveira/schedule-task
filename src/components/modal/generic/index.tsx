import { useDispatch, useSelector } from 'react-redux';
import { ModalsID, storeType } from '../../../store/types';
import { enableModal } from '../../../store/base/slice';
import { ModalComponent } from '../dinamic/error';
import { ReactElement } from 'react';

export const GenericModals: React.FC = () => {
  const { showModalID } = useSelector((state: storeType) => state.base);
  const dispatch = useDispatch();
  const hideModal = () => dispatch(enableModal(ModalsID.none));

  const modalToShow = (): ReactElement => {
    switch (showModalID) {
      case ModalsID.none:
        return <></>;

      case ModalsID.error:
        return <ModalComponent onClose={hideModal} />;
    }
  };

  return <>{modalToShow()}</>;
};
