import { device } from '../../../styles/device';
import styled, { keyframes } from 'styled-components';

const fireAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
`;

export const DeleteButton = styled.button`
  padding: 11px;
  border-radius: 40px;
  background: var(--black);
  cursor: pointer;
  border: var(--see-more-item);

  &:hover,
  :focus {
    transition: var(--tran-fast);
    animation: ${fireAnimation} 1.5s infinite;
  }

  & > svg {
    fill: var(--white);
  }

  @media ${device.tablet} {
    padding: 15px;
  }
`;
