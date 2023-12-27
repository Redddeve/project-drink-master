import styled from 'styled-components';
import { device } from '../../styles/device';
import { darkTheme, lightTheme } from '../../styles/theme';

export const StyledUpToTopButton = styled.button`
  position: fixed;
  padding: 5px 8px 3px 8px;

  bottom: 30px;
  right: 20px;
  cursor: pointer;
  border-radius: 12px;
  border: 1px solid var(--white);
  box-shadow: 1px 1px 15px 3px gray;
  transition-transform {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 1000ms;
  }
  transition: var(--tran-fast);

  &:hover,
  &:focus {
    transform: scale(1.05);
    /* box-shadow: 1px 1px 10px 3px var(--white); */
    border: ${({ theme }) =>
      theme === 'dark'
        ? darkTheme.borderColor.main
        : lightTheme.borderColor.main};
  }
  @media ${device.tablet} {
    right: 32px;
  }
`;
