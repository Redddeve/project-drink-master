import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router';
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
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const navigate = useNavigate();

  // if (isLoggedIn) {
  //   navigate('/');
  // }

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

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
