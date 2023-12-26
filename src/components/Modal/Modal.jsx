import {
  CloseModalBtn,
  MessageBox,
  MessageText,
  ModalContent,
  ModalOverlay,
} from './Modal.styled';
import sprite from '../../images/sprite.svg';
import PropTypes from 'prop-types';
import { useCallback, useEffect } from 'react';

const Modal = ({ isOpen, onClose, message, background }) => {
  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [e.key]
  );
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <ModalOverlay onClick={onClose}>
        <ModalContent background={background}>
          <MessageBox>
            <MessageText>{message}</MessageText>
            <CloseModalBtn onClick={onClose}>
              <svg width={28} height={28}>
                <use
                  href={`${sprite}#icon-X`}
                  style={{
                    stroke: 'white',
                  }}
                />
              </svg>
            </CloseModalBtn>
          </MessageBox>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default Modal;

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};
