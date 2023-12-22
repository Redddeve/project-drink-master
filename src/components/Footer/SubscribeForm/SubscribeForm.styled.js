import styled from 'styled-components';

export const FormWrap = styled.div`
  max-width: 335px;
  margin-bottom: 80px;
  @media screen and (min-width: 768px) {
    max-width: 309px;
  }
`;
export const SubscribeDesc = styled.div`
  margin-bottom: 24px;
  line-height: 1.42;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const SubscribeInput = styled.input`
  position: relative;
  width: 100%;
  height: 54px;
  padding-left: 24px;

  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 200px;
  cursor: pointer;
  color: var(--white);
  line-height: 1.125;
  @media screen and (min-width: 768px) {
    height: 56px;
    font-size: 17px;
    line-height: 1.56;
  }
`;
export const InputMessage = styled.div`
  position: relative;
  height: 18px;
  padding: 3px 0px 3px 20px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.16;
  color: var(--error-red);
  .correct {
    color: var(--correct-green);
  }
`;
export const StyledStatus = styled.svg`
  z-index: 1;
  position: absolute;
  width: 24px;
  height: 24px;
  right: 14px;
  top: -39px;
  fill: none;
  &.error {
    fill: var(--error-red);
  }

  &.correct {
    fill: var(--correct-green);
  }
`;
