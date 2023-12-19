import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signinThunk, signupThunk } from '../../redux/auth/operations.js';
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  StyledWrap,
  StyledHead,
  StyledInput,
  StyledSignInBtn,
  StyledLink,
  StyledFormWrap,
  StyledDatePicker,
  StyledCalendarIcon,
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
          // style={
          //   errors?.name
          //     ? { border: '1px solid red' }
          //     : isValid
          //     ? { border: '1px solid green' }
          //     : { border: '1px solid white' }
          // }
        />
        {errors?.name && <p>{errors?.name?.message || 'This is an ERROR'}</p>}
        {!errors?.name && isValid && <p>ok</p>}

        {/* <StyledInput {...register('date')} placeholder="dd/mm/yyyy" /> */}

        <StyledDatePicker
          {...register('date')}
          showIcon
          selected={date}
          onChange={date => setDate(date)}
          icon={
            <StyledCalendarIcon>
              <use href={`${sprite}#icon-calendar`} />
            </StyledCalendarIcon>
          }
          placeholderText="dd/mm/yyyy"
        />

        <StyledInput {...register('email')} placeholder="Email" />
        <StyledInput {...register('password')} placeholder="Password" />
        <StyledSignInBtn>Sign Up</StyledSignInBtn>

        <StyledLink to="/signin">Sign In</StyledLink>
      </StyledFormWrap>
    </StyledWrap>
  );
};

export default SignUp;
