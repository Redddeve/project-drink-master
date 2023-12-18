import styled from 'styled-components';
import { device } from '../../styles/device';

export const HeaderWrapper = styled.header`
  border-bottom: 1px solid rgba(243, 243, 243, 0.2);
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media ${device.tablet} {
    padding: 20px 32px;
  }

  @media ${device.desktop} {
    justify-content: space-between;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
  }
`;