import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import CommonBtn from '../../../SharedComponents/CommonBtn/CommonBtn';
import sprite from '../../../../images/sprite.svg';
import {
  DropdownContainer,
  Heading,
  EditProfileButton,
  PenIcon,
  StyledLogoutButton,
} from './UserDropdown.styled';
import { useSelector } from 'react-redux';

const UserDropdown = forwardRef(
  ({ handlerEditProfileClick, handlerLogoutDropdownClick }, ref) => {
    const theme = useSelector(state => state.theme.theme);
    return (
      <DropdownContainer ref={ref} theme={theme}>
        <Heading onClick={handlerEditProfileClick}>
          <p>Edit profile</p>
          <EditProfileButton>
            <PenIcon>
              <svg width="14" height="14">
                <use href={sprite + '#icon-pen'} />
              </svg>
            </PenIcon>
          </EditProfileButton>
        </Heading>
        <StyledLogoutButton
          propClass={CommonBtn.dropdownButton}
          onClick={handlerLogoutDropdownClick}
        >
          Log out
        </StyledLogoutButton>
      </DropdownContainer>
    );
  }
);

UserDropdown.displayName = 'UserDropdown';

export default UserDropdown;

UserDropdown.propTypes = {
  handlerEditProfileClick: PropTypes.func,
  handlerLogoutDropdownClick: PropTypes.func,
};
