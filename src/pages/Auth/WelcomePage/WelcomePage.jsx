import Welcome from '../../../components/Welcome/Welcome';
import { StyledBgWrap, StyledPageWrap } from '../AuthPages.styled';

const WelcomePage = () => {
  return (
    <StyledBgWrap>
      <StyledPageWrap>
        <Welcome />
      </StyledPageWrap>
    </StyledBgWrap>
  );
};

export default WelcomePage;
