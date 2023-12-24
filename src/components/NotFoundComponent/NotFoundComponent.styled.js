import styled from 'styled-components';
import { device } from '../../styles/device';
import { darkTheme, lightTheme } from '../../styles/theme';

export const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  width: 241px;
  height: 156px;
  padding: 160px 0 180px;

  & > svg {
    width: 241px;
    height: 123px;
    fill: var(--transp-not-found);
    fill: ${({ theme }) =>
      theme === 'dark'
        ? darkTheme.colors.notFound
        : lightTheme.colors.notFound};
    position: absolute;

    @media ${device.tablet} {
      width: 301px;
      height: 123px;
    }

    @media ${device.desktop} {
      width: 402px;
      height: 200px;
    }
  }

  @media ${device.tablet} {
    width: 301px;
    height: 201px;
    padding: 120px 0 90px;
  }

  @media ${device.desktop} {
    width: 402px;
    height: 200px;
    padding: 120px 0 70px;
  }
`;

export const Zero = styled.img`
  width: 123px;
  height: 156px;
  position: relative;
  pointer-events: auto;
  z-index: 12;
  top: -13px;
  left: 70px;

  @media ${device.tablet} {
    width: 158px;
    height: 201px;
    top: -5px;
    left: 77px;
  }

  @media ${device.desktop} {
    width: 158px;
    height: 201px;
    top: -5px;
    left: 129px;
  }
`;
