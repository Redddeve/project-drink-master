import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { signinThunk } from '../../redux/auth/operations.js';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';

import {
  StyledWrap,
  StyledHead,
  StyledInput,
  StyledSignInBtn,
  StyledLink,
  StyledFormWrap,
  StyledInputWrap,
  StyledMessage,
  StyledEye,
  StyledStatus,
} from './SignIn.styled.js';

import sprite from '../../images/sprite.svg';

import { useState } from 'react';

const SignIn = () => {
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState('eye-off');

  const handleEyeToggle = () => {
    if (type === 'password') {
      setIcon('eye');
      setType('text');
    } else {
      setIcon('eye-off');
      setType('password');
    }
  };

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const {
    handleSubmit,
    register,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    mode: 'all',
  });

  const isFieldValid = fieldName => {
    return getValues(fieldName) && !errors[fieldName];
  };

  // const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const submit = data => {
    dispatch(signinThunk(data))
      .unwrap()
      .then(() => {
        navigate(location.state?.from ?? '/');
        reset();
      });
  };
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <StyledWrap>
      <StyledFormWrap onSubmit={handleSubmit(submit)}>
        <StyledHead>Sign In</StyledHead>

        <StyledInputWrap>
          <StyledInput
            {...register('email', {
              required: "email can't be empty",
              minLength: {
                value: 5,
                message: 'email must contain at least 5 characters',
              },
              pattern: {
                value:
                  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
                message: 'Invalid characters or missing  @ or . ',
              },
            })}
            placeholder="Email"
            // autoComplete="off"
            className={
              errors?.email ? 'error' : isFieldValid('email') ? 'correct' : ''
            }
          />
          {errors?.email && (
            <>
              <StyledStatus className="error">
                <use href={`${sprite}#icon-error-outline`} />
              </StyledStatus>
              <StyledMessage className="error">
                {errors?.email?.message || 'ERROR'}
              </StyledMessage>
            </>
          )}
          {!errors?.email && isFieldValid('email') && (
            <>
              <StyledStatus className="correct">
                <use href={`${sprite}#icon-done-outline`} />
              </StyledStatus>
              <StyledMessage className="correct">
                This is a CORRECT email
              </StyledMessage>
            </>
          )}
        </StyledInputWrap>
        <StyledInputWrap>
          <StyledInput
            {...register('password', {
              required: "password can't be empty",
              minLength: {
                value: 6,
                message: 'password must contain at least 6 characters',
              },
            })}
            placeholder="Password"
            // autoComplete="off"
            type={type}
            className={
              errors?.password
                ? 'error'
                : isFieldValid('password')
                ? 'correct'
                : ''
            }
          />

          <StyledEye onClick={handleEyeToggle}>
            <use href={`${sprite}#icon-${icon}`} />
          </StyledEye>
          {errors?.password && (
            <StyledMessage className="error">
              {errors?.password?.message || 'ERROR'}
            </StyledMessage>
          )}
          {!errors?.password && isFieldValid('password') && (
            <StyledMessage className="correct">
              This is a CORRECT password
            </StyledMessage>
          )}
        </StyledInputWrap>
        <StyledSignInBtn>Sign In</StyledSignInBtn>

        <StyledLink to="/signup">Sign Up</StyledLink>
      </StyledFormWrap>
    </StyledWrap>
  );
};

export default SignIn;
