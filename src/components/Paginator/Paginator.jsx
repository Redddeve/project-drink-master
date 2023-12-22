import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { PaginateContainer, Paginator } from './Paginator.styled';
import { selectPages } from '../../redux/drinks/selectors';
import { useSelector } from 'react-redux';
import PaginationIcon from './PaginatorIcons/PaginatedIcons';
import { selectTheme } from '../../redux/theme/selectors';

function PaginatedItems({ items, destination, ListComponent, setPage }) {
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = useSelector(selectPages);

  const paginatorExpediency = pageCount > 1;

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    if (selected === pageCount - 1) {
      toast.info(
        'The final chapter of our cocktail symphony has been reached. 🍹🎉'
      );
    }
    setCurrentPage(selected);
  };

  return (
    <PaginateContainer>
      <ListComponent cocktailData={items} destination={destination} />
      {paginatorExpediency && (
        <Paginator
          breakLabel="..."
          nextLabel={<PaginationIcon iconId="icon-pagi-right" />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel={<PaginationIcon iconId="icon-pagi-left" />}
          renderOnZeroPageCount={null}
          forcePage={currentPage}
          forceDisplay={true}
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
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func,
};

export default PaginatedItems;
