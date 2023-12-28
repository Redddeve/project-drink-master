import { GalleryLoaderStyle } from './Loader.styled';
import { PuffLoader } from 'react-spinners';
export const GalleryLoader = () => {
  return (
    <GalleryLoaderStyle>
      <PuffLoader color="#dfdfdf" size={60} speedMultiplier={1.5} />
    </GalleryLoaderStyle>
  );
};
