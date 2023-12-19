// StyledAddBtn,
//   StyledAddDiv,
//   StyledIngDiv,
//   StyledIngFieldBtn,
//   StyledIngFieldInput,
//   StyledIngFieldLabel,
//   StyledIngFieldWrapper,
//   StyledIngTitle,
//   StyledIngTitleDiv,
import styled from 'styled-components';
import { device } from '../../styles/device';
export const StyledAddBtn = styled.button`
  background-color: transparent;
  border: none;
  width: 16px;
  height: 16px;
  font-size: 30px;
  line-height: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  color: inherit;
  font-family: inherit;
  cursor: pointer;
  &:disabled {
    color: var(--transp-white);
  }
`;
export const StyledIngDiv = styled.div`
  padding-bottom: 80px;
  @media ${device.tablet} {
    max-width: 704px;
  }
  @media ${device.desktop} {
    max-width: 540px;
  }
`;

export const StyledAddDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 104px;
  border-radius: 200px;
  border: 1px solid var(--transp-white);
  height: 38px;
  margin-bottom: 34px;
`;
export const StyledIngFieldBtn = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  *:hover > svg {
    stroke: aqua;
  }
  @media ${device.tablet} {
    margin-left: 188px;
  }
  @media ${device.desktop} {
    margin-left: 20px;
  }
`;
export const StyledIngFieldInput = styled.input`
  width: 101px;
  height: 50px;
  border-radius: 200px;
  border: 1px solid var(--transp-white);
  background: transparent;
  color: var(--white);
  padding: 0 60px 0 24px;
  position: relative;

  @media ${device.tablet} {
    width: 150px;
  }
`;
export const StyledIngFieldLabel = styled.label`
  display: flex;
  margin-bottom: 18px;
  gap: 8px;
`;
export const StyledIngFieldWrapper = styled.div`
  position: relative;
`;

export const StyledIngTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
