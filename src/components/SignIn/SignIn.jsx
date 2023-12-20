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
} from './SignIn.styled.js';

const SignIn = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm({
    // resolver: yupResolver(schema),
    mode: 'onBlur',
  }); // const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const submit = data => {
    dispatch(signinThunk(data))
      .unwrap()
      .then(() => {
        navigate(location.state?.from ?? '/');
      });
    reset();
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
            className={errors?.email ? 'error' : isValid ? 'correct' : ''}
          />
          {errors?.email && (
            <StyledMessage className="error">
              {errors?.email?.message || 'ERROR'}
            </StyledMessage>
          )}
          {!errors?.email && isValid && (
            <StyledMessage className="correct">ok</StyledMessage>
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
            className={errors?.password ? 'error' : isValid ? 'correct' : ''}
          />
          {errors?.password && (
            <StyledMessage className="error">
              {errors?.password?.message || 'ERROR'}
            </StyledMessage>
          )}
          {!errors?.password && isValid && (
            <StyledMessage className="correct">ok</StyledMessage>
          )}
        </StyledInputWrap>
        <StyledSignInBtn disabled={!isValid}>Sign Up</StyledSignInBtn>

        <StyledLink to="/signup">Sign Up</StyledLink>
      </StyledFormWrap>
    </StyledWrap>
  );
};

export default SignIn;
