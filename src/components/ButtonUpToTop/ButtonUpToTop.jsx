import { useEffect, useState } from 'react';
import { MoveUp } from 'lucide-react';
import { StyledUpToTopButton } from './ButtonUpToTop.styled';
import { selectTheme } from '../../redux/theme/selectors';
import { useSelector } from 'react-redux';

const ButtonUpToTop = () => {
  const [visible, setVisible] = useState(false);
  const theme = useSelector(selectTheme);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);
  return (
    <StyledUpToTopButton
      theme={theme}
      style={{ display: visible ? 'inline-block' : 'none' }}
    >
      <MoveUp size={25} color="#0A0A11" onClick={scrollToTop} />
    </StyledUpToTopButton>
  );
};

export default ButtonUpToTop;
