import PropTypes from 'prop-types';

import { ButtonStyle } from './CommonBtn.styled';

const CommonBtn = ({ children, variant = 'none', ...restProps }) => {
  return (
    <ButtonStyle {...restProps} className={variant}>
      {children}
    </ButtonStyle>
  );
};

export default CommonBtn;

CommonBtn.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'none',
    'subscribe',
    'seeMore',
    'seeMoreItem',
    'addFavorite',
    'add',
    'addDrink',
    'otherDrinks',
    'saveChanges',
    'logOut',
    'cancel',
    'logoutEditProf',
    'signUpSmal',
    'signInSmal',
    'signLong',
  ]),
};
