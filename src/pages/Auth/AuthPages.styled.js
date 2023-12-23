import styled from 'styled-components';

import bgMobFull from '../../images/start-bg-mob@2x.jpg';
import bgTabFull from '../../images/start-bg-tab@2x.jpg';
import bgDeskFull from '../../images/start-bg-desc@2x.jpg';
import { device } from '../../styles/device';

export const StyledBgWrap = styled.div`
  background-image: url(${bgMobFull});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  max-width: 100vw;
  height: 100vh;

  @media ${device.tablet} {
    background-image: url(${bgTabFull});
  }

  @media ${device.desktop} {
    background-image: url(${bgDeskFull});
  }
`;

export const StyledPageWrap = styled.div`
  height: 100vh;
  min-width: 335px;
  max-width: 375px;
  z-index: 100;
  margin: 0 auto;

  @media ${device.tablet} {
    max-width: 768px;
  }

  @media ${device.desktop} {
    max-width: 1440px;
  }
`;
