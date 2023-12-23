import { useEffect, useState } from 'react';
import { size } from '../styles/device';

const useResponsiveItemsPerPage = ({
  mobile,
  tablet,
  desktop,
  default: defaultPerPage,
}) => {
  const [currentDevice, setCurrentDevice] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth < parseInt(size.tablet)) {
        setCurrentDevice('mobile');
      } else if (windowWidth < parseInt(size.desktop)) {
        setCurrentDevice('tablet');
      } else {
        setCurrentDevice('desktop');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getItemsPerPage = () => {
    switch (currentDevice) {
      case 'mobile':
        return mobile || 9;
      case 'tablet':
        return tablet || 8;
      case 'desktop':
        return desktop || 9;
      default:
        return defaultPerPage || 9;
    }
  };

  const itemsPerPage = getItemsPerPage();

  return { itemsPerPage };
};

export default useResponsiveItemsPerPage;
