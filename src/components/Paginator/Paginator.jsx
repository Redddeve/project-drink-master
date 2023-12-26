import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { PaginateContainer, Paginator } from './Paginator.styled';
import PaginationIcon from './PaginatorIcons/PaginatedIcons';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchPage } from '../../redux/drinks/operations';
import { selectPage } from '../../redux/drinks/selectors';

function PaginatedItems({
  items,
  destination,
  ListComponent,
  pageCount,
  theme,
}) {
  const dispatch = useDispatch();
  const selectedPage = useSelector(selectPage);

  const paginatorExpediency = pageCount > 1;

  const handlePageClick = ({ selected }) => {
    dispatch(setSearchPage(selected + 1));

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    if (selected === pageCount - 1 && pageCount >= 5) {
      toast.info(
        'The final chapter of our cocktail symphony has been reached. 🍹🎉'
      );
    }
  };

  return (
    <PaginateContainer>
      <ListComponent
        cocktailData={items}
        destination={destination}
        theme={theme}
      />
      {paginatorExpediency && (
        <Paginator
          theme={theme}
          breakLabel="..."
          nextLabel={<PaginationIcon iconId="icon-pagi-right" />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel={<PaginationIcon iconId="icon-pagi-left" />}
          renderOnZeroPageCount={null}
          forcePage={selectedPage - 1}
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
  pageCount: PropTypes.number.isRequired,
  setSelectedPage: PropTypes.func,
  theme: PropTypes.string.isRequired,
  selectedPage: PropTypes.number,
};

export default PaginatedItems;
