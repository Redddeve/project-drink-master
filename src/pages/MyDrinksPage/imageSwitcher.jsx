import { LastImg } from '../../components/MyCocktails/MyCocktails.styled';
import getDevicePixelRatio from '../../components/Utility/getDevicePixelRatio';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useCallback } from 'react-hook-form';

const Switcher = ({ mobile, usual, retina }) => {
  const [currentImg, setCurrentImage] = useState(mobile);
  const dpr = getDevicePixelRatio();

  const handleImageSwitch = useCallback(() => {
    const isTablet = window.innerWidth >= 768;

    if (isTablet && dpr >= 2) {
      setCurrentImage(retina);
    } else if (isTablet && dpr === 1) {
      setCurrentImage(usual);
    } else {
      setCurrentImage(mobile);
    }
  }, [dpr, mobile, usual, retina]);

  useEffect(() => {
    handleImageSwitch();
    window.addEventListener('resize', handleImageSwitch);
    return () => {
      window.removeEventListener('resize', handleImageSwitch);
    };
  }, [dpr, mobile, usual, retina, handleImageSwitch]);

  return (
    <>
      <LastImg src={currentImg} alt="three cocktails" />
    </>
  );
};

Switcher.propTypes = {
  mobile: PropTypes.string.isRequired,
  usual: PropTypes.string.isRequired,
  retina: PropTypes.string.isRequired,
};

export default Switcher;
