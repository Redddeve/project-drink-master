import { useEffect, useState } from 'react';
import { size } from '../styles/device';

const useResponsiveItemsPerPage = ({
  mobile,
  tablet,
  desktop,
  default: defaultPerPage,
}) => {
  const [currentDevice, setCurrentDevice] = useState(getInitialDevice());

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth < parseInt(size.tablet)) {
        setCurrentDevice('mobileM');
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

  function getInitialDevice() {
    const windowWidth = window.innerWidth;

    if (windowWidth < parseInt(size.tablet)) {
      return 'mobileM';
    } else if (windowWidth < parseInt(size.desktop)) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  }

  const getItemsPerPage = () => {
    switch (currentDevice) {
      case 'mobileM':
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

  return itemsPerPage;
};

export default useResponsiveItemsPerPage;
