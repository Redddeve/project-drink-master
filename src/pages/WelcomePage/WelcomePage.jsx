import { StyledIcon, StyledWrap } from "./WelcomePage.styled";
import sprite from "../../images/sprite.svg";

const WelcomePage = () => {
  return (
    <StyledWrap>
      WelcomePage
      <StyledIcon width="32" height="32">
        <use href={sprite + "#icon-logo"} />
      </StyledIcon>
    </StyledWrap>
  );
};

export default WelcomePage;
