import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import CommonBtn from '../../../SharedComponents/CommonBtn/CommonBtn';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signoutThunk } from '../../../../redux/auth/operations';
import {
  LogoutContainer,
  CloseButton,
  CloseIcon,
  ButtonContainer,
  LogoutBtn,
  CancelBtn,
} from './Logout.styled';
import sprite from '../../../../images/sprite.svg';

const Logout = forwardRef(({ handlerLogoutDropdownClick }, ref) => {
  const theme = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerLogoutClick = () => {
    dispatch(signoutThunk());
    navigate('/welcome');
  };

  return (
    <LogoutContainer ref={ref} theme={theme}>
      <CloseButton onClick={handlerLogoutDropdownClick}>
        <CloseIcon>
          <svg width="24" height="24">
            <use href={sprite + '#icon-X'} />
          </svg>
        </CloseIcon>
      </CloseButton>
      <p>Are you sure you want to log out?</p>
      <ButtonContainer>
        <LogoutBtn
          onClick={handlerLogoutClick}
          propClass={CommonBtn.biggerButton}
        >
          {' '}
          Log out
        </LogoutBtn>
        <CancelBtn
          onClick={handlerLogoutDropdownClick}
          propClass={CommonBtn.cancelButton}
        >
          {' '}
          Cancel
        </CancelBtn>
      </ButtonContainer>
    </LogoutContainer>
  );
});

Logout.displayName = 'Logout';

Logout.propTypes = {
  handlerLogoutDropdownClick: PropTypes.func,
};

export default Logout;
