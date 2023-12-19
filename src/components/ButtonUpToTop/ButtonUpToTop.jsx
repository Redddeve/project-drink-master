import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { StyledUpToTopButton } from './ButtonUpToTop.styled';

const ButtonUpToTop = () => {
  const [visible, setVisible] = useState(false);

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
    <StyledUpToTopButton style={{ display: visible ? 'inline-block' : 'none' }}>
      <ArrowUp size={35} color="#0f0f0f" onClick={scrollToTop} />
    </StyledUpToTopButton>
  );
};

export default ButtonUpToTop;
