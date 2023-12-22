import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { PaginateContainer, Paginator } from './Paginator.styled';
import sprite from '../../images/sprite.svg';
import { size } from '../../styles/device';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/theme/selectors';

function PaginatedItems({
  items,
  destination,
  ListComponent,
  itemsPerPageValue,
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentDevice, setCurrentDevice] = useState('');
  const theme = useSelector(selectTheme);

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
        return itemsPerPageValue.mobile || 9;
      case 'tablet':
        return itemsPerPageValue.tablet || 8;
      case 'desktop':
        return itemsPerPageValue.desktop || 9;
      default:
        return itemsPerPageValue.default || 9;
    }
  };

  const itemsPerPage = getItemsPerPage();

  const uniqueItems = Array.from(new Set(items));
  const pageCount = Math.ceil(uniqueItems.length / itemsPerPage);
  const paginatorExpediency = uniqueItems.length > itemsPerPage;

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);

    if (selected === pageCount - 1) {
      toast.info("It's the end of the cocktail list... 😟");
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (currentPage >= pageCount) {
      setCurrentPage(Math.max(0, pageCount - 1));
    }
  }, [currentPage, pageCount, currentDevice]);

  return (
    <PaginateContainer>
      <ListComponent
        cocktailData={uniqueItems.slice(
          currentPage * itemsPerPage,
          (currentPage + 1) * itemsPerPage
        )}
        destination={destination}
      />
      {paginatorExpediency && (
        <Paginator
          theme={theme}
          breakLabel="..."
          nextLabel={
            <svg width="8" height="15" fill="currentColor">
              <use href={`${sprite}#icon-pagi-right`} />
            </svg>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel={
            <svg width="8" height="15" fill="currentColor">
              <use href={`${sprite}#icon-pagi-left`} />
            </svg>
          }
          renderOnZeroPageCount={null}
          forcePage={currentPage}
        />
      )}
    </PaginateContainer>
  );
}

PaginatedItems.propTypes = {
  items: PropTypes.array.isRequired,
  destination: PropTypes.string,
  ListComponent: PropTypes.elementType.isRequired,
  itemsPerPageValue: PropTypes.shape({
    mobile: PropTypes.number,
    tablet: PropTypes.number,
    desktop: PropTypes.number,
    default: PropTypes.number,
  }),
};

export default PaginatedItems;
