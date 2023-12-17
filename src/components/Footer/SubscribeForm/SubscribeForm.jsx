import {
  FormWrap,
  SubscribeDesc,
  SubscribeButton,
  SubscribeInput,
  InputMessage,
} from './SubscribeForm.styled';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SubscribeForm = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });
  const onSubmit = data => {
    toast.success(`Subscription ${data.email} completed successfully!`);
    reset();
  };

  return (
    <FormWrap>
      <SubscribeDesc>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </SubscribeDesc>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">
          <SubscribeInput
            {...register('email', {
              required: "Email can't be empty",
              minLength: {
                value: 5,
                message: 'Email must contain at least 5 characters',
              },
              pattern: {
                value:
                  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                message: 'Invalid characters or missing  @ or . ',
              },
            })}
            type="email"
            name="email"
            title="Enter an email"
            placeholder="Enter the email"
          />
          <InputMessage>
            {errors?.email && (
              <p>{errors?.email?.message || 'This is an ERROR email'}</p>
            )}
            {!errors?.email && isValid && (
              <p className="correct">This is an CORRECT email</p>
            )}
          </InputMessage>
        </label>

        <SubscribeButton type="submit" disabled={!isValid}>
          Subscribe
        </SubscribeButton>
      </form>
    </FormWrap>
  );
};

export default SubscribeForm;
