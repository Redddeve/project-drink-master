import { LoaderStyle } from './Loader.styled';
import { PuffLoader } from 'react-spinners';
export const Loader = () => {
  return (
    <LoaderStyle>
      <PuffLoader color="#dfdfdf" size={60} speedMultiplier={1.5} />
    </LoaderStyle>
  );
};
