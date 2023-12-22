import styled from 'styled-components';
import { darkTheme, lightTheme } from '../../styles/theme';

export const StyledPolicyText = styled.p`
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};
`;
