import { createRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/selectors';
import { CSSTransition } from 'react-transition-group';
import UserDropdown from './UserDropdown/UserDropdown';
import EditProfile from './EditProfile/EditProfile';
import Logout from './Logout/Logout';
import { UserGroup, UserButton, UserIcon, UserName } from './UserMenu.styled';
import { selectTheme } from '../../../redux/theme/selectors';

export default function UserMenu() {
  const { name, avatarURL } = useSelector(selectUser);
  const theme = useSelector(selectTheme);

  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [isOpenLogout, setIsOpenLogout] = useState(false);
  const [isOpenEditProfile, setIsOpenEditProfile] = useState(false);
  const [transitionTimeout, setTransitionTimeout] = useState(250);

  const nodeRef = createRef(null);

  const handlerLogoutDropdownClick = () => setIsOpenLogout(!isOpenLogout);

  const handlerEditProfileClick = () =>
    setIsOpenEditProfile(!isOpenEditProfile);

  const handlerUserDropdownClick = () => {
    if (isOpenEditProfile || isOpenLogout) {
      setTransitionTimeout(0);
    } else {
      setTransitionTimeout(250);
    }
    setIsOpenDropdown(!isOpenDropdown);
    setIsOpenLogout(false);
    setIsOpenEditProfile(false);
  };

  const handlerBackdropClicks = e => {
    const backdrop = e.target.closest('#user_group') === null;
    const esc = e.key === 'Escape';
    setTransitionTimeout(250);
    if (backdrop || esc) {
      if (isOpenEditProfile || isOpenLogout) {
        setTransitionTimeout(0);
      } else {
        setTransitionTimeout(250);
      }
      setIsOpenDropdown(false);
      setIsOpenEditProfile(false);
      setIsOpenLogout(false);
    }
  };

  useEffect(() => {
    if (isOpenDropdown) {
      window.addEventListener('click', handlerBackdropClicks);
      window.addEventListener('keydown', handlerBackdropClicks);
    }

    return () => {
      window.removeEventListener('click', handlerBackdropClicks);
      window.removeEventListener('keydown', handlerBackdropClicks);
    };
  });

  return (
    <UserGroup id="user_group">
      <UserButton onClick={handlerUserDropdownClick}>
        <UserIcon src={avatarURL} alt="User photo" />
        <UserName theme={theme}>{name}</UserName>
      </UserButton>

      <CSSTransition
        in={isOpenDropdown}
        nodeRef={nodeRef}
        timeout={transitionTimeout}
        classNames="item"
        unmountOnExit
        onEnter={() => setIsOpenDropdown(true)}
        onExited={() => setIsOpenDropdown(false)}
      >
        <UserDropdown
          ref={nodeRef}
          handlerEditProfileClick={handlerEditProfileClick}
          handlerLogoutDropdownClick={handlerLogoutDropdownClick}
        />
      </CSSTransition>

      <CSSTransition
        in={isOpenEditProfile}
        nodeRef={nodeRef}
        timeout={250}
        classNames="item"
        unmountOnExit
        onEnter={() => setIsOpenEditProfile(true)}
        onExited={() => setIsOpenEditProfile(false)}
      >
        <EditProfile
          ref={nodeRef}
          handlerEditProfileClick={handlerEditProfileClick}
          handlerUserDropdownClick={handlerUserDropdownClick}
        />
      </CSSTransition>

      <CSSTransition
        in={isOpenLogout}
        nodeRef={nodeRef}
        timeout={250}
        classNames="item"
        unmountOnExit
        onEnter={() => setIsOpenLogout(true)}
        onExited={() => setIsOpenLogout(false)}
      >
        <Logout
          ref={nodeRef}
          handlerLogoutDropdownClick={handlerLogoutDropdownClick}
        />
      </CSSTransition>
    </UserGroup>
  );
}
