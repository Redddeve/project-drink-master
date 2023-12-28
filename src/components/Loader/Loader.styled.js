import { styled } from 'styled-components';

export const LoaderStyle = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const GalleryLoaderStyle = styled(LoaderStyle)`
  top: 20%;
`;
