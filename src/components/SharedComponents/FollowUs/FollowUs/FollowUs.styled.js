import styled from 'styled-components';
import { darkTheme, lightTheme } from '../../../../styles/theme';
import { device } from '../../../../styles/device';

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
      ? '1px solid var(--transp-white)'
      : '1px solid var(--transp-dark)'};
  transition: border var(--tran-fast), opacity var(--tran-fast);

  &:hover {
    cursor: pointer;
    svg {
      opacity: 1;
    }
  }
  &:focus {
    svg {
      opacity: 1;
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
  /* stroke: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.transp : lightTheme.colors.transp}; */
  fill: ${({ theme }) => (theme === 'dark' ? 'var(--white)' : 'var(--black)')};

  opacity: 0.5;
  transition: opacity;

  @media ${device.tablet} {
    width: 28px;
    height: 28px;
  }
`;
