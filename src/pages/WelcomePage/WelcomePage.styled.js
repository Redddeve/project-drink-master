import styled from "styled-components";
import bg from "../../images/wellcomeGlass@1x.jpg";

export const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  height: 100vh;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: left -5% center;
`;

export const StyledTextWrap = styled.div`
  display: flex;
  width: 335px;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

export const StyledHead = styled.h2`
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 114.286% */
  letter-spacing: -0.56px;
`;

export const StyledText = styled.p`
  width: 319px;
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.28px;
`;

export const StyledBtnWrap = styled.div`
  display: flex;
  gap: 14px;
`;

export const StyledBtnSignUp = styled.button`
  display: flex;
  padding: 14px 40px;
  align-items: center;
  border-radius: 42px;
  background: #f3f3f3;
  color: #161f37;
  border: 1px solid rgba(243, 243, 243, 0.2);

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */
  transition: var(--tran-fast);

  &:hover {
    cursor: pointer;
    background: transparent;
    border: 1px solid rgba(243, 243, 243, 0.2);
    color: #f3f3f3;
  }
`;

export const StyledBtnSignIn = styled.button`
  display: flex;
  padding: 14px 40px;
  align-items: center;
  border-radius: 42px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background: transparent;

  color: #f3f3f3;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */
  transition: var(--tran-fast);

  &:hover {
    cursor: pointer;
    background: #f3f3f3;
    /* border: 1px solid rgba(243, 243, 243, 0.2); */
    color: #161f37;
  }
`;
