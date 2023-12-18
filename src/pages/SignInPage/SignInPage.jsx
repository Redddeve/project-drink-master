// import React from "react";
// import { useForm } from "react-hook-form";

import {
  StyledWrap,
  StyledHead,
  StyledInput,
  StyledSignInBtn,
  StyledLink,
  StyledFormWrap,
} from "./SignInPage.styled.js";

const SignInPage = () => {
  // const { register } = useForm();

  return (
    <StyledWrap>
      <StyledFormWrap>
        <StyledHead>Sign In</StyledHead>

        <StyledInput name="email" placeholder="Email" />
        <StyledInput name="password" placeholder="Password" />
        <StyledSignInBtn>Sign In</StyledSignInBtn>

        <StyledLink to="/signup">Sign Up</StyledLink>
      </StyledFormWrap>
    </StyledWrap>
  );
};

export default SignInPage;
