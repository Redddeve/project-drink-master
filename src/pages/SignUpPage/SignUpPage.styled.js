import styled from "styled-components";
import bg from "../../images/start-bg-mob@2x.jpg";
import { Link } from "react-router-dom";

export const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  /* width: 100%; */
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  /* background-repeat: no-repeat;
  background-position: right --10vw center; */
`;

export const StyledFormWrap = styled.form`
  display: flex;

  width: 335px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledHead = styled.h2`
  align-self: flex-start;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 114.286% */
  letter-spacing: -0.56px;
  margin-bottom: 28px;
`;

export const StyledInput = styled.input`
  width: 335px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background-color: transparent;

  color: rgba(243, 243, 243, 0.5);

  outline: none;
  padding: 18px 24px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  margin-bottom: 14px;
  &:last-of-type {
    margin-bottom: 28px;
  }

  &::placeholder {
    color: rgba(243, 243, 243, 0.5);
  }
  &:focus {
    border: 1px solid rgba(243, 243, 243, 0.5);
    color: #f3f3f3;
    &::placeholder {
      color: #f3f3f3;
    }
  }
`;

export const StyledSignInBtn = styled.button`
  display: flex;
  padding: 18px 141px;
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
  margin-bottom: 14px;

  &:hover {
    cursor: pointer;
    background: transparent;
    border: 1px solid rgba(243, 243, 243, 0.2);
    color: #f3f3f3;
  }
`;

export const StyledLink = styled(Link)`
  color: #f3f3f3;

  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 133.333% */
  text-decoration-line: underline;
  &:hover {
    //hover
  }
`;
