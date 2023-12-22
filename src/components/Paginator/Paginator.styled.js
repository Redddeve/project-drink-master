import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import { device } from '../../styles/device';
import { darkTheme, lightTheme } from '../../styles/theme';

export const PaginateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`;

export const Paginator = styled(ReactPaginate).attrs({
  activeClassName: 'active',
})`
  padding: 14px 0;
  display: flex;

  @media ${device.tablet} {
    padding: 14px 24px;
  }

  li {
    width: 27px;
    height: 27px;
    &:not(:nth-child(-n + 2)) {
      margin-left: 24px;
    }
  }

  li a {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 4px;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    color: ${({ theme }) =>
      theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};
  }

  li.previous {
    margin-right: 48px;

    @media ${device.tablet} {
      margin-right: 40px;
    }
  }

  li.next {
    margin-left: 48px;

    @media ${device.tablet} {
      margin-left: 40px;
    }
  }

  li.previous a,
  li.next a,
  li.break a {
    align-items: center;
    color: ${({ theme }) =>
      theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};
  }

  li.active a {
    background-color: ${({ theme }) =>
      theme === 'dark'
        ? darkTheme.background.activeBlue
        : lightTheme.background.activeBlue};
    color: ${({ theme }) =>
      theme === 'dark' ? 'var(--white)' : 'var(--white)'};
    align-items: center;
    padding-bottom: 0;
  }

  li.disabled a {
    color: ${({ theme }) =>
      theme === 'dark' ? darkTheme.colors.transp : lightTheme.colors.transp};
  }

  li.disable,
  li.disabled a {
    cursor: default;
  }
`;
