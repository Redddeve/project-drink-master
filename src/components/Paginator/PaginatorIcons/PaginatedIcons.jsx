import PropTypes from 'prop-types';

import sprite from '../../../images/sprite.svg';

const PaginationIcon = ({ iconId }) => {
  return (
    <svg width="8" height="15" fill="currentColor">
      <use href={`${sprite}#${iconId}`} />
    </svg>
  );
};

PaginationIcon.propTypes = {
  iconId: PropTypes.string.isRequired,
};
export default PaginationIcon;
