import styled from 'styled-components';
import { device } from '../../styles/device';
import { darkTheme, lightTheme } from '../../styles/theme';

export const MainContainer = styled.div`
  margin-top: 80px;

  @media ${device.tablet} {
    width: 261px;
  }

  @media ${device.desktop} {
    position: absolute;
    top: 40%;
    right: 15%;
  }
`;

export const FollowUsContainer = styled.div`
  margin-bottom: 40px;
`;

export const TitleFollow = styled.p`
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const PopularDrinkTitle = styled.p`
  margin-bottom: 28px;
  color: black;
  font-size: 18px;

  line-height: 1.33;
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};
  border: none;
  border-radius: 6px;
  width: fit-content;
  padding: 4px;

  @media ${device.tablet} {
    margin-bottom: 40px;
    font-size: 24px;
    line-height: 32px;
  }
  @media ${device.desktop} {
  }
`;

export const PopDrinkContainer = styled.div`
  @media ${device.tablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 704px;
  }

  @media ${device.desktop} {
    flex-direction: column;
    width: 340px;
  }
`;

export const SpaceContainer = styled.div`
  margin-bottom: 24px;
  display: flex;
  gap: 14px;

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
    img {
      transition: transform 0.3s ease-out;
    }

    &:hover img {
      transform: scale(1.1);
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      opacity: 0;
      transition: opacity 0.3s ease-out;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    &:hover .overlay {
      opacity: 1;
    }
  }
`;

export const PositionContainer = styled.div`
  width: 232px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;

export const ImgDrink = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 12px;

  @media ${device.tablet} {
  }
`;

export const DrinkTitle = styled.p`
  font-size: 16px;
  line-height: 22px;
  width: 232px;
  margin: 0;
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;

export const DescriptiontTitle = styled.p`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.transp : lightTheme.colors.transp};
  text-overflow: ellipsis;
  line-height: 18px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media ${device.tablet} {
    line-height: 20px;
  }
`;
//================= FollowUs================
export const FollowUsWrap = styled.ul`
  display: flex;
  gap: 14px;

  @media ${device.tablet} {
    gap: 16px;
  }
`;
export const StyledFollowUsItem = styled.li`
  display: flex;
  justify-content: center;
  width: 38px;
  height: 38px;
  padding: 8px;
  text-align: center;
  border-radius: 10px;
  border: ${({ theme }) =>
    theme === 'dark'
      ? '1px solid rgba(243, 243, 243, 0.2)'
      : '1px solid rgba(22, 31, 55, 0.2)'};

  transition: border var(--tran-fast);

  &:hover {
    border: ${({ theme }) =>
      theme === 'dark'
        ? '1px solid rgba(243, 243, 243, 0.5)'
        : '1px solid var(--dark-theme-bg)'};
    cursor: pointer;
    svg {
      fill: ${({ theme }) =>
        theme === 'dark' ? 'var(--white)' : 'var(--black)'};
    }
  }
  &:focus {
    border: ${({ theme }) =>
      theme === 'dark'
        ? '1px solid rgba(243, 243, 243, 0.5)'
        : '1px solid var(--dark-theme-bg)'};
    svg {
      fill: ${({ theme }) =>
        theme === 'dark' ? 'var(--white)' : 'var(--black)'};
    }
  }

  @media ${device.tablet} {
    width: 44px;
    height: 44px;
  }
`;
export const StyledFollowUsLink = styled.a``;

export const SvgSocial = styled.svg`
  width: 22px;
  height: 22px;
  fill: ${({ theme }) =>
    theme === 'dark' ? 'var(--transp-white)' : 'rgba(22, 31, 55, 0.8)'};
  transition: fill(--tran-fast);
  @media ${device.tablet} {
    width: 28px;
    height: 28px;
  }
`;
