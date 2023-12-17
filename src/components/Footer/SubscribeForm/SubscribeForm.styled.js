import styled from "styled-components";

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
  width: 100%;
  max-width: 335px;
  height: 54px;
  padding-left: 24px;
  margin-bottom: 18px;

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

export const SubscribeButton = styled.button`
  width: 100%;
  max-width: 335px;
  height: 54px;

  flex-shrink: 0;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 200px;
  cursor: pointer;
  color: var(--white);
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.125;

  transition: background-color var(--tran-fast);

  &:hover:not(:disabled) {
    background-color: var(--white);
    color: var(--black);
  }
  &:focus:not(:disabled) {
    background-color: var(--white);
    color: var(--black);
  }
  @media screen and (min-width: 768px) {
    height: 56px;
    font-size: 17px;
    line-height: 1.56;
  }
`;
