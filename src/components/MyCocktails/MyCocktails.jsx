import PropTypes from 'prop-types';

import CocktailList from '../CocktailList/CocktailList';

import usual from '../../images/blue-iced-tea@1x.png';
import retina from '../../images/blue-iced-tea@2x.png';
import PaginatedItems from '../Paginator/Paginator';
import {
  EmptyDescription,
  EmptyFavoritesContainer,
  EmptyFavoritesImage,
} from '../FavoriteCocktails/FavoriteCocktails.styled';
import { selectIsLoading } from '../../redux/drinks/selectors';
import { useSelector } from 'react-redux';
import { GalleryLoader } from '../Loader/GalleryLoader';

const MyOwnCocktails = ({ pageCount, theme, items, destination }) => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <GalleryLoader />}
      {items.length === 0 ? (
        <EmptyFavoritesContainer>
          <EmptyFavoritesImage
            srcSet={`${usual} 1x, ${retina} 2x`}
            alt="Cocktail"
          />
          <EmptyDescription theme={theme}>
            You haven&rsquo;t added any cocktails yet
          </EmptyDescription>
        </EmptyFavoritesContainer>
      ) : (
        <PaginatedItems
          pageCount={pageCount}
          items={items}
          destination={destination}
          ListComponent={CocktailList}
          theme={theme}
        />
      )}
    </>
  );
};

MyOwnCocktails.propTypes = {
  destination: PropTypes.string.isRequired,
  pageCount: PropTypes.number.isRequired,
  setSelectedPage: PropTypes.func,
  theme: PropTypes.string.isRequired,
  selectedPage: PropTypes.number,
  items: PropTypes.array.isRequired,
};

export default MyOwnCocktails;
