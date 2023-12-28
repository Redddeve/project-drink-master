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

export const Zero = styled.img.attrs(props => ({
  $$isPlaying: props.$isPlaying,
}))`
  width: 123px;
  height: 156px;
  position: ${props => (props.$isPlaying ? 'fixed' : 'relative')};
  z-index: ${props => (props.$isPlaying ? '12' : '1')};
  pointer-events: auto;
  top: ${props => (props.$isPlaying ? '27%' : '-13px')};
  left: ${props => (props.$isPlaying ? 'calc(50% - 51px)' : '70px')};

  @media ${device.tablet} {
    width: 158px;
    height: 201px;
    top: ${props => (props.$isPlaying ? '28%' : '-5px')};
    left: ${props => (props.$isPlaying ? 'calc(50% - 69px)' : '77px')};
  }

  @media ${device.desktop} {
    width: 158px;
    height: 201px;
    top: ${props => (props.$isPlaying ? '28%' : '-5px')};
    left: ${props => (props.$isPlaying ? 'calc(50% - 69px)' : '129px')};
  }
`;
