import { forwardRef } from "react";
import PropTypes from "prop-types";
import CommonBtn from "../../../SharedComponents/CommonBtn/CommonBtn";
import sprite from "../../../../images/sprite.svg";
import {
  DropdownContainer,
  Heading,
  EditProfileButton,
  PenIcon,
} from "./UserDropdown.styled";

const UserDropdown = forwardRef(({ handlerEditProfileClick, handlerLogoutDropdownClick }, ref) => {
  return (
    <DropdownContainer ref={ref}>
      <Heading>
        <p>Edit profile</p>
        <EditProfileButton onClick={handlerEditProfileClick}>
          <PenIcon>
           <svg width="14" height="14">
                <use href={sprite + "#icon-pen"} />
            </svg>
          </PenIcon>
        </EditProfileButton>
      </Heading>
      <CommonBtn
        propClass={CommonBtn.dropdownButton}
        title="Log out"
        onClick={handlerLogoutDropdownClick}
      />
    </DropdownContainer>
  );
});

UserDropdown.displayName = "UserDropdown";

export default UserDropdown;

UserDropdown.propTypes = {
  handlerEditProfileClick: PropTypes.func,
  handlerLogoutDropdownClick: PropTypes.func,
};