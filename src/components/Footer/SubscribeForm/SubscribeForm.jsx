// import { useForm } from "react-hook-form";
import {
  FormWrap,
  SubscribeDesc,
  SubscribeButton,
  SubscribeInput,
} from "./SubscribeForm.styled";

const SubscribeForm = () => {
  //   const { handleSubmit, register } = useForm();
  return (
    <FormWrap>
      <SubscribeDesc>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </SubscribeDesc>
      <form
      //   onSubmit={handleSubmit(submit)}
      >
        <label htmlFor="email">
          <SubscribeInput
            type="email"
            name="email"
            title="Enter an email"
            placeholder="Enter the email"
            minLength={3}
            required
            // {...register("email")}
          />
        </label>

        <SubscribeButton type="submit">Subscribe</SubscribeButton>
      </form>
    </FormWrap>
  );
};

export default SubscribeForm;
