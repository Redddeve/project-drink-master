import styled from 'styled-components';

export const FollowUsWrap = styled.ul`
  display: flex;
  gap: 14px;
  > li {
    width: 38px;
    height: 38px;
    padding: 8px;
    text-align: center;
    border-radius: 10px;
    border: 1px solid rgba(243, 243, 243, 0.2);
    transition: border var(--tran-fast), opacity var(--tran-fast);

    &:hover {
      border: 1px solid rgba(243, 243, 243, 0.5);
      cursor: pointer;
      svg {
        opacity: 1;
      }
    }
    &:focus {
      border: 1px solid rgba(243, 243, 243, 0.5);
      svg {
        opacity: 1;
      }
    }
  }

  @media screen and (min-width: 768px) {
    gap: 16px;
    > li {
      width: 44px;
      height: 44px;
    }
  }
`;

export const SvgSocial = styled.svg`
  width: 22px;
  height: 22px;
  stroke: var(--white);
  fill: var(--white);
  opacity: 0.5;
  transition: opacity;

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;
