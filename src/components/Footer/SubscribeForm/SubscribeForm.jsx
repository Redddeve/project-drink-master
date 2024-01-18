import {
  FormWrap,
  SubscribeDesc,
  SubscribeInput,
  InputMessage,
  StyledStatus,
} from './SubscribeForm.styled';
import { useForm } from 'react-hook-form';
import CommonBtn from '../../SharedComponents/CommonBtn/CommonBtn';
import sprite from '../../../images/sprite.svg';

import { useDispatch } from 'react-redux';
import { subscribeThunk } from '../../../redux/auth/operations';

const SubscribeForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = data => {
    dispatch(subscribeThunk(data));
    reset();
  };

  return (
    <FormWrap>
      <SubscribeDesc>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </SubscribeDesc>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <SubscribeInput
            {...register('email', {
              required: "Email can't be empty",
              minLength: {
                value: 5,
                message: 'Email must contain at least 5 characters',
              },
              pattern: {
                value:
                  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
                message: 'Invalid characters or missing  @ or . ',
              },
            })}
            type="email"
            name="email"
            title="Enter an email"
            placeholder="Enter the email"
            autoComplete="email"
          />
          <InputMessage>
            {errors?.email && (
              <>
                <StyledStatus className="error">
                  <use href={`${sprite}#icon-error-outline`} />
                </StyledStatus>
                <p>{errors?.email?.message || 'This is an ERROR email'}</p>
              </>
            )}
            {!errors?.email && isValid && (
              <>
                <StyledStatus className="correct">
                  <use href={`${sprite}#icon-done-outline`} />
                </StyledStatus>
                <p className="correct">This is an CORRECT email</p>
              </>
            )}
          </InputMessage>
        </label>

        <CommonBtn type="submit" variant="subscribe" disabled={!isValid}>
          Subscribe
        </CommonBtn>
      </form>
    </FormWrap>
  );
};

export default SubscribeForm;
