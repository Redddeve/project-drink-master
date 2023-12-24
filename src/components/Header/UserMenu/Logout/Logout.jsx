import { forwardRef } from "react";
import PropTypes from "prop-types";
import CommonBtn from "../../../SharedComponents/CommonBtn/CommonBtn";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signoutThunk } from "../../../../redux/auth/operations";
import {
  LogoutContainer,
  CloseButton,
  CloseIcon,
  ButtonContainer,
} from "./Logout.styled";
import sprite from "../../../../images/sprite.svg"


const Logout = forwardRef(({ handlerLogoutDropdownClick }, ref) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerLogoutClick = () => {
    dispatch(signoutThunk());
    navigate("/welcome");
  };

  return (
    <LogoutContainer ref={ref}>
      <CloseButton onClick={handlerLogoutDropdownClick}>
        <CloseIcon>
          <svg width="24" height="24">
            <use href={sprite + "#icon-X"} />
           </svg>       
        </CloseIcon>
      </CloseButton>
      <p>Are you sure you want to log out?</p>
      <ButtonContainer>
        <CommonBtn
          onClick={handlerLogoutClick}
          propClass={CommonBtn.biggerButton}
          title="Logout"
        />
        <CommonBtn
          onClick={handlerLogoutDropdownClick}
          propClass={CommonBtn.cancelButton}
          title="Cancel"
        />
      </ButtonContainer>
    </LogoutContainer>
  );
});

Logout.displayName = "Logout";

Logout.propTypes = {
  handlerLogoutDropdownClick: PropTypes.func,
};

export default Logout;
