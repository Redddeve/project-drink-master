import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { signinThunk, signupThunk } from '../../redux/auth/operations.js';
import { Navigate, useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';

import {
  StyledWrap,
  StyledHead,
  StyledInput,
  StyledSignInBtn,
  StyledLink,
  StyledFormWrap,
  StyledDatePicker,
  StyledCalendarIcon,
  StyledInputWrap,
  StyledMessage,
  StyledEye,
  StyledStatus,
} from './SignUp.styled.js';
import sprite from '../../images/sprite.svg';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';
import moment from 'moment';

const SignUp = () => {
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

  const {
    handleSubmit,
    register,
    reset,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    mode: 'all',
  });

  const isFieldValid = fieldName => {
    return getValues(fieldName) && !errors[fieldName];
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = data => {
    const outputDate = moment(data.date).format('YYYY-MM-DD');
    const newData = {
      ...data,
      date: outputDate,
    };
    dispatch(signupThunk(newData))
      .unwrap()
      .then(res => dispatch(signinThunk(res)))
      .then(() => {
        navigate('/');
        reset();
      });
  };

  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <StyledWrap>
      <StyledFormWrap onSubmit={handleSubmit(submit)}>
        <StyledHead>Sign Up</StyledHead>

        <StyledInputWrap>
          <StyledInput
            {...register('name', {
              required: "name can't be empty",
              minLength: {
                value: 2,
                message: 'name must contain at least 2 characters',
              },
            })}
            placeholder="Name"
            className={
              errors?.name ? 'error' : isFieldValid('name') ? 'correct' : ''
            }
          />
          {errors?.name && (
            <>
              <StyledStatus className="error">
                <use href={`${sprite}#icon-error-outline`} />
              </StyledStatus>
              <StyledMessage className="error">
                {errors?.name?.message || 'ERROR'}
              </StyledMessage>
            </>
          )}
          {!errors?.name && isFieldValid('name') && (
            <>
              <StyledStatus className="correct">
                <use href={`${sprite}#icon-done-outline`} />
              </StyledStatus>
              <StyledMessage className="correct">
                This is a CORRECT name
              </StyledMessage>
            </>
          )}
        </StyledInputWrap>

        <StyledInputWrap>
          <Controller
            control={control}
            name="date"
            rules={{ required: "date can't be empty" }}
            render={({ field }) => (
              <StyledDatePicker
                selected={field.value}
                onChange={date => field.onChange(date)}
                onBlur={() => field.onBlur()}
                showIcon
                toggleCalendarOnIconClick
                icon={
                  <StyledCalendarIcon>
                    <use href={`${sprite}#icon-calendar`} />
                  </StyledCalendarIcon>
                }
                placeholderText="Your date of birth"
                maxDate={new Date()}
                style={{ float: 'left' }}
                calendarStartDay={1}
                showYearDropdown
                showMonthDropdown
                className={
                  errors?.date ? 'error' : isFieldValid('date') ? 'correct' : ''
                }
              />
            )}
          />
          {errors?.date && (
            <StyledMessage className="error">
              {errors?.date?.message || 'ERROR'}
            </StyledMessage>
          )}
          {!errors?.date && isFieldValid('date') && (
            <StyledMessage className="correct">
              This is a CORRECT date
            </StyledMessage>
          )}
        </StyledInputWrap>

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

        <StyledSignInBtn>Sign Up</StyledSignInBtn>

        <StyledLink to="/signin" aria-label="Go to sign in page">
          Sign In
        </StyledLink>
      </StyledFormWrap>
    </StyledWrap>
  );
};

export default SignUp;
