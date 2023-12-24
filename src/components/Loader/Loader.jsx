import { LoaderStyle } from './Loader.styled';
import { ClockLoader } from 'react-spinners';
export const Loader = () => {
  return (
    <LoaderStyle>
      <ClockLoader color="#deeb00" size={200} speedMultiplier={2} />
    </LoaderStyle>
  );
};
