/* eslint-disable no-undef */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { PaginateContainer, Paginator } from './Paginator.styled';
import sprite from '../../images/sprite.svg';
import { selectPages } from '../../redux/drinks/selectors';
import { useSelector } from 'react-redux';

function PaginatedItems({ items, destination, ListComponent, setPage }) {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = useSelector(selectPages);

  const pageCount = pages;

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    if (selected === pageCount - 1) {
      toast.info("It's the end of the cocktail list... 😟");
    }
  };

  return (
    <PaginateContainer>
      <ListComponent cocktailData={items} destination={destination} />
      <Paginator
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
        forceDisplay={true}
      />
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
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func,
};

export default PaginatedItems;
