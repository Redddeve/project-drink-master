import styled from 'styled-components';

export const darkTheme = {
  background: {
    main: 'var(--dark)',
  },
  colors: {
    main: 'var(--white)',
    sub: 'var(--sub-white)',
    transp: 'var(--transp-white)',
  },
  logo: {
    main: 'var(--white)',
  },
  borderColor: {
    main: 'var(--dark-theme-common)',
  },
};

export const lightTheme = {
  background: {
    main: 'var(--white)',
  },
  colors: {
    main: 'var(--dark)',
    sub: 'var(--transp-dark)',
    transp: 'var(--transp-dark)',
  },
  logo: {
    main: 'var(--black)',
  },
  borderColor: {
    main: 'var(--light-theme-common)',
  },
};

export const StyledAppWrapper = styled.div`
  background-color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.background.main : lightTheme.background.main};
`;
