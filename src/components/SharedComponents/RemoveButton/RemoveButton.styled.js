import styled from 'styled-components';
import { device } from '../../../styles/device';

export const DeleteButton = styled.button`
  padding: 11px;
  border-radius: 40px;
  background: var(--black);
  cursor: pointer;
  border: var(--see-more-item);
  transition: var(--tran-fast);

  &:hover,
  :focus {
    transform: scale(1.08);
  }

  & > svg {
    fill: var(--white);
  }

  @media ${device.tablet} {
    padding: 15px;
  }
`;
