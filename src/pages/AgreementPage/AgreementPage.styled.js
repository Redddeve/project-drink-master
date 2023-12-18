import styled from 'styled-components';
import { device } from '../../styles/device';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  > h1 {
    text-align: center;
    font-size: 32px;
    font-weight: 600;
    padding-bottom: 30px;

    @media ${device.tablet} {
      font-size: 56px;
    }
    @media ${device.desktop} {
      font-size: 64px;
    }
  }
  > p {
    text-align: justify;
    margin-bottom: 20px;
  }
`;
