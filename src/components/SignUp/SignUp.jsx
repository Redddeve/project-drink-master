import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signupThunk } from '../../redux/auth/operations.js';
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';

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

  const { handleSubmit, register } = useForm();
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
      .then(() => {
        navigate('/');
      });
  };

  return (
    <StyledWrap>
      <StyledFormWrap onSubmit={handleSubmit(submit)}>
        <StyledHead>Sign Up</StyledHead>
        <StyledInput {...register('name')} placeholder="Name" />

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
