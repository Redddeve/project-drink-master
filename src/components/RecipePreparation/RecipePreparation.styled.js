import styled from 'styled-components';
import { device } from '../../styles/device';
import mobileImg from '../../images/three-cocktails-mobile@1x.jpg';
import tabletImg from '../../images/three-cocktails@1x.jpg';
import { darkTheme, lightTheme } from '../../styles/theme';
export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 40px;
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
    flex-direction: row;
    gap: 60px;
  }
`;

export const StyledImgDiv = styled.div`
  background: url(${mobileImg});
  width: 335px;
  height: 430px;
  display: block;
  border-radius: 9px;
  background-size: cover;
  background-position: center;
  @media ${device.tablet} {
    background: url(${tabletImg});
    width: 704px;
    background-size: cover;
    border-radius: 10px;
  }
  @media ${device.desktop} {
    width: 631px;
    height: 480px;
  }
`;

export const StyledTitle = styled.h3`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 40px;
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};
  @media ${device.tablet} {
    font-size: 40px;
    line-height: 44px;
  }
  @media ${device.desktop} {
    margin-bottom: 60px;
  }
`;

export const StyledText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};
  @media ${device.tablet} {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
  }
  @media ${device.desktop} {
    width: 549px;
  }
`;
