import styled from 'styled-components';

export const StyledUpToTopButton = styled.button`
  display: flex;
  justify-content: center;
  position: fixed;
  opacity: 1;
  bottom: 30px;
  right: 5px;
  cursor: pointer;
  transition-transform {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 1000ms;
  }

  border-radius: 10px;
`;
