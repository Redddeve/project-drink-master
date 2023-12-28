import SignIn from '../../components/AuthComponents/SignIn';
import { StyledBgWrap, StyledPageWrap } from './AuthPages.styled';

const SignInPage = () => {
  return (
    <StyledBgWrap>
      <StyledPageWrap>
        <SignIn />
      </StyledPageWrap>
    </StyledBgWrap>
  );
};

export default SignInPage;
