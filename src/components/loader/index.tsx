import { ReactElement } from 'react';
import { LoaderContainer } from './styles';
import { useSelector } from 'react-redux';
import { storeType } from '../../store/types';

const Loader = (): ReactElement => {
  const { globalLoading } = useSelector((state: storeType) => state.base);
  console.log(globalLoading);

  return (
    <LoaderContainer show={globalLoading}>
      <img src="/loadingGif.gif" alt="Computer man"></img>
    </LoaderContainer>
  );
};

export default Loader;
