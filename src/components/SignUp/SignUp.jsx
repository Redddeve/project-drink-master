import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signinThunk, signupThunk } from '../../redux/auth/operations.js';
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';

// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';

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
} from './SignUp.styled.js';
import sprite from '../../images/sprite.svg';

const SignUp = () => {
  const [date, setDate] = useState(null);

  // const schema = yup.object({
  //   name: yup.string().required('name is required'),
  //   date: yup.string().required('date is required'),
  //   email: yup
  //     .string()
  //     .email('Email format is not valid')
  //     .required('email is required'),
  //   password: yup.string().required('password is required'),
  //   // .matches(
  //   //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  //   //   'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
  //   // ),
  // });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm({
    // resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = data => {
    const inputDate = new Date(date);
    const year = inputDate.getFullYear();
    const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
    const day = inputDate.getDate().toString().padStart(2, '0');
    const outputDateString = `${year}-${month}-${day}`;

    const newData = {
      ...data,
      date: outputDateString,
    };
    console.log(newData);
    dispatch(signupThunk(newData))
      .unwrap()
      .then(res => dispatch(signinThunk(res)))
      .then(() => {
        navigate('/');
      });
    reset();
  };

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
            className={errors?.name ? 'error' : isValid ? 'correct' : ''}
            // $content={
            //   errors?.name ? errors?.name?.message : isValid ? 'ok' : ''
            // }
          />
          {errors?.name && (
            <StyledMessage className="error">
              {errors?.name?.message || 'ERROR'}
            </StyledMessage>
          )}
          {!errors?.name && isValid && (
            <StyledMessage className="correct">ok</StyledMessage>
          )}
        </StyledInputWrap>

        {/* <StyledInput {...register('date')} placeholder="dd/mm/yyyy" /> */}
        <StyledInputWrap>
          <StyledDatePicker
            {...register('date', {
              required: "date can't be empty",
            })}
            showIcon
            selected={date}
            onChange={date => setDate(date)}
            icon={
              <StyledCalendarIcon>
                <use href={`${sprite}#icon-calendar`} />
              </StyledCalendarIcon>
            }
            placeholderText="dd/mm/yyyy"
            className={errors?.date ? 'error' : isValid ? 'correct' : ''}
          />
          {errors?.date && (
            <StyledMessage className="error">
              {errors?.date?.message || 'ERROR'}
            </StyledMessage>
          )}
          {!errors?.date && isValid && (
            <StyledMessage className="correct">ok</StyledMessage>
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

        <StyledLink to="/signin">Sign In</StyledLink>
      </StyledFormWrap>
    </StyledWrap>
  );
};

export default SignUp;
