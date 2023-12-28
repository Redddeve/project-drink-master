import SignUp from '../../components/AuthComponents/SignUp';
import { StyledBgWrap, StyledPageWrap } from './AuthPages.styled';

const SignUpPage = () => {
  return (
    <StyledBgWrap>
      <StyledPageWrap>
        <SignUp />
      </StyledPageWrap>
    </StyledBgWrap>
  );
};

export default SignUpPage;
