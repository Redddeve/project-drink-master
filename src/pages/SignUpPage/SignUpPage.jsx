// import React from "react";
// import { useForm } from "react-hook-form";

import {
  StyledWrap,
  StyledHead,
  StyledInput,
  StyledSignInBtn,
  StyledLink,
  StyledFormWrap,
} from "./SignUpPage.styled.js";

const SignInPage = () => {
  // const { register } = useForm();

  return (
    <StyledWrap>
      <StyledFormWrap>
        <StyledHead>Sign Up</StyledHead>
        <StyledInput name="name" placeholder="Name" />

        <StyledInput name="calendar" placeholder="dd/mm/yyyy" />

        <StyledInput name="email" placeholder="Email" />
        <StyledInput name="password" placeholder="Password" />
        <StyledSignInBtn>Sign Up</StyledSignInBtn>

        <StyledLink to="/signin">Sign In</StyledLink>
      </StyledFormWrap>
    </StyledWrap>
  );
};

export default SignInPage;
