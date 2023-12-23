import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import sprite from '../../../images/sprite.svg';
import {
  deleteOwnDrinkThunk,
  removeFavoriteDrinkThunk,
} from '../../../redux/drinks/operations';
import { DeleteButton } from './RemoveButton.styled';

const RemoveButton = ({ id, page }) => {
  const dispatch = useDispatch();
  const [isRemoveHandled, setRemoveHandled] = useState(false);

  const removeActions = {
    favorite: removeFavoriteDrinkThunk,
    my: deleteOwnDrinkThunk,
  };

  const onHandleRemove = () => {
    if (!isRemoveHandled) {
      const removeAction = removeActions[page];
      if (removeAction) {
        dispatch(removeAction(id));
      }
      setRemoveHandled(true);
    }
  };

  return (
    <DeleteButton type="button" onClick={onHandleRemove}>
      <svg width="24" height="22">
        <use href={sprite + '#icon-trash'} />
      </svg>
    </DeleteButton>
  );
};

RemoveButton.propTypes = {
  id: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default RemoveButton;
