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
} from './SignIn.styled.js';

const SignIn = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { handleSubmit, register } = useForm();
  // const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const submit = data => {
    dispatch(signinThunk(data))
      .unwrap()
      .then(() => {
        navigate(location.state?.from ?? '/');
      });
  };
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <StyledWrap>
      <StyledFormWrap onSubmit={handleSubmit(submit)}>
        <StyledHead>Sign In</StyledHead>

        <StyledInput {...register('email')} placeholder="Email" />
        <StyledInput {...register('password')} placeholder="Password" />
        <StyledSignInBtn>Sign In</StyledSignInBtn>

        <StyledLink to="/signup">Sign Up</StyledLink>
      </StyledFormWrap>
    </StyledWrap>
  );
};

export default SignIn;
