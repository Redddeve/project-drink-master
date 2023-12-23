import styled from 'styled-components';
import { device } from '../../styles/device';
import { darkTheme, lightTheme } from '../../styles/theme';

export const CocktailCard = styled.li`
  display: flex;
  width: 335px;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;

  @media ${device.tablet} {
    width: 342px;
    gap: 24px;
  }

  @media ${device.desktop} {
    width: 400px;
    gap: 24px;
  }
`;

export const CocktailImage = styled.img`
  width: 335px;
  height: 360px;
  border-radius: 8px;
  background: linear-gradient(
    180deg,
    rgba(10, 10, 17, 0.02) 51.18%,
    rgba(10, 10, 17, 0.77) 97.66%
  );

  @media ${device.tablet} {
    width: 342px;
  }

  @media ${device.desktop} {
    width: 400px;
    height: 400px;
  }
`;

export const CocktailContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const CocktailTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};

  @media ${device.tablet} {
    font-size: 24px;
  }
`;

export const CocktailLabel = styled.p`
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.transp : lightTheme.colors.transp};
`;

export const CocktailDescription = styled.p`
  overflow: hidden;
  height: 75px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};

  @media ${device.tablet} {
    height: 110px;
    -webkit-line-clamp: 5;
  }

  @media ${device.desktop} {
    height: 90px;
    -webkit-line-clamp: 4;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
