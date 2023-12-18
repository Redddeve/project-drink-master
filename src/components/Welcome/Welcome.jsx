import {
  StyledBtnSignIn,
  StyledBtnSignUp,
  StyledBtnWrap,
  StyledHead,
  StyledText,
  StyledTextWrap,
  StyledWrap,
} from './Welcome.styled';

const Welcome = () => {
  return (
    <StyledWrap>
      <StyledTextWrap>
        <StyledHead>Welcome to the app!</StyledHead>
        <StyledText>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </StyledText>
      </StyledTextWrap>
      <StyledBtnWrap>
        <StyledBtnSignUp to="/signup">Sign Up</StyledBtnSignUp>
        <StyledBtnSignIn to="/signin">Sign In</StyledBtnSignIn>
      </StyledBtnWrap>
    </StyledWrap>
  );
};

export default Welcome;
