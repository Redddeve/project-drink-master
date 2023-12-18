import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

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
  const [startDate, setStartDate] = useState(new Date());
  return (
    <StyledWrap>
      <StyledFormWrap>
        <StyledHead>Sign Up</StyledHead>
        <StyledInput name="name" placeholder="Name" />

        {/* <StyledInput name="calendar" placeholder="dd/mm/yyyy" /> */}
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <StyledInput name="email" placeholder="Email" />
        <StyledInput name="password" placeholder="Password" />
        <StyledSignInBtn>Sign Up</StyledSignInBtn>

        <StyledLink to="/signin">Sign In</StyledLink>
      </StyledFormWrap>
    </StyledWrap>
  );
};

export default SignInPage;
