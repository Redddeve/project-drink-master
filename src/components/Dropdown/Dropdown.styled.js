import { useSelector } from 'react-redux';

import { selectTheme } from '../../redux/theme/selectors';
export const GetMenuStyles = element => {
  const theme = useSelector(selectTheme);
  if (element === 'color') {
    return theme === 'dark' ? 'var(transp-white)' : 'var(--transp-dark)';
  } else if (element === 'background') {
    return theme === 'dark' ? 'var(--black)' : 'var(--white)';
  } else if (element === 'hover') {
    return theme === 'dark' ? 'var(--white)' : 'var(--black)';
  }
};

export const stylesSelect = {
  control: (baseStyles, { isFocused }) => ({
    ...baseStyles,
    width: 200,
    height: 50,
    color: 'var(--white)',
    border: 'none',
    textAlign: 'right',
    background: 'transparent',
    boxShadow: isFocused ? 'none' : baseStyles.boxShadow,
    borderColor: isFocused ? 'transparent' : baseStyles.borderColor,
  }),
  option: (styles, state) => ({
    ...styles,
    padding: '4px 14px',
    fontSize: '12px',
    backgroundColor: state.isSelected ? 'rgba(255, 255, 255, 0.10)' : '',
    color: state.isSelected ? 'var(--white)' : 'var(--transp-white)',
    ':hover': {
      background: 'rgba(255, 255, 255, 0.10)',
      color: '#F3F3F3',
    },
  }),
  menu: baseStyles => ({
    ...baseStyles,
    background: GetMenuStyles('background'),
    position: 'absolute',
    zIndex: '20',
    border: 'none ',
    borderRadius: '12px ',
    maxHeight: '300px',
    width: '151px',
    right: '0',
  }),
  menuList: base => ({
    ...base,
    zIndex: '20px',
    '::-webkit-scrollbar': {
      width: '2px',
      height: '0px',
    },
    '::-webkit-scrollbar-track': {
      background: '#161F37',
    },
    '::-webkit-scrollbar-thumb': {
      background: '#5d6b90',
    },
  }),
};
export const ingStyles = {
  ...stylesSelect,
  control: baseStyles => ({
    ...baseStyles,
    width: 200,
    height: 50,
    color: 'var(--white)',
    border: 'border: 1px solid rgba(243, 243, 243, 0.30)',
    borderRadius: '200px',
    textAlign: 'left',
    background: 'transparent',
    '@media only screen and (min-width:768px)': {
      ...stylesSelect['@media only screen and (min-width: 768px)'],
      width: 332,
    },
    ':focus': {
      outline: 'transparent',
      border: 'transparent',
      boxShadow: 'none',
    },
  }),
  menu: baseStyles => ({
    ...baseStyles,
    background: GetMenuStyles('background'),
    border: 'none ',
    borderRadius: '12px ',
    maxHeight: '300px',
    width: '100%',
    left: '0',
  }),
};

export const drinkStyles = {
  ...stylesSelect,
  control: baseStyles => ({
    ...baseStyles,
    width: '100%',
    height: 54,
    color: 'var(--white)',
    border: 'none',
    borderRadius: '200px',
    textAlign: 'left',
    background: 'var(--black)',
    padding: ' 0 14px',
    fontSize: '14px',
    '@media only screen and (min-width:768px)': {
      width: 199,
      fontSize: '17px',
      textAlign: 'center',
    },
  }),
  menuList: provided => ({
    ...provided,
    maxHeight: 'none',
  }),
  menu: baseStyles => ({
    ...baseStyles,
    background: GetMenuStyles('background'),
    borderRadius: '20px ',
    width: '100%',
    overflowY: 'hidden',
    fontSize: '14px',
    padding: '12px 0',
    '@media only screen and (min-width:768px)': {
      fontSize: '17px',
      lineHeight: '1.56',
      padding: '10px 0',
    },
  }),
  option: (styles, state) => ({
    ...stylesSelect,
    padding: '4px 23px',
    backgroundColor: state.isSelected ? 'rgba(255, 255, 255, 0.10)' : '',
    color: GetMenuStyles('color'),
    ':hover': {
      background: 'rgba(255, 255, 255, 0.10)',
      color: GetMenuStyles('hover'),
    },
  }),
};

export const drinkIngStyles = {
  ...drinkStyles,
  menuList: provided => ({
    ...provided,
    maxHeight: '300px',
    '::-webkit-scrollbar': {
      width: '2px',
      height: '0px',
    },
    '::-webkit-scrollbar-track': {
      background: '#161F37',
    },
    '::-webkit-scrollbar-thumb': {
      background: '#5d6b90',
    },
  }),
};
