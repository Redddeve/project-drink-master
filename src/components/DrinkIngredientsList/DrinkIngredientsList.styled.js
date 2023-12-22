import styled from 'styled-components';
import { device } from '../../styles/device';
import { darkTheme, lightTheme } from '../../styles/theme';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  padding-bottom: 80px;
  @media ${device.tablet} {
    gap: 22px;
  }
  @media ${device.desktop} {
    gap: 35px;
    padding-bottom: 100px;
  }
`;

export const StyledItem = styled.li`
  width: 157px;
  height: 175px;
  @media ${device.tablet} {
    width: 220px;
    height: 258px;
  }
`;
export const StyledImgDiv = styled.div`
  border-radius: 8px;
  width: 157px;
  height: 157px;
  background-color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.main : lightTheme.background.lightBg};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  @media ${device.tablet} {
    width: 220px;
    height: 220px;
    margin-bottom: 14px;
  }
  @media ${device.desktop} {
  }
`;
export const StyledImg = styled.img`
  width: 107px;
  height: 107px;
  @media ${device.tablet} {
    width: 175px;
    height: 175px;
  }
  @media ${device.desktop} {
  }
`;
export const StyledTextDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StyledTextTitle = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};
  @media ${device.tablet} {
    font-size: 18px;
    line-height: 24px;
  }
  @media ${device.desktop} {
  }
`;
export const StyledTextMeasure = styled(StyledTextTitle)`
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.transp : lightTheme.colors.transp};
`;
export const StyledTitle = styled.h3`
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.transp : lightTheme.colors.transp};
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 42px;
  font-weight: 500;
  @media ${device.tablet} {
    font-size: 18px;
    line-height: 24px;
  }
  @media ${device.desktop} {
  }
`;
