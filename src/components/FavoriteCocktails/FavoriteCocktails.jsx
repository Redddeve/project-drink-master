import PropTypes from 'prop-types';
import CocktailList from '../CocktailList/CocktailList';
import usual from '../../images/blue-iced-tea@1x.png';
import retina from '../../images/blue-iced-tea@2x.png';
import { selectIsLoading } from '../../redux/drinks/selectors';
import {
  EmptyDescription,
  EmptyFavoritesContainer,
  EmptyFavoritesImage,
} from './FavoriteCocktails.styled';
import PaginatedItems from '../Paginator/Paginator';
import { useSelector } from 'react-redux';
import { Loader } from '../Loader/Loader';

const FavoriteCocktails = ({ destination, pageCount, favorites, theme }) => {
  const isLoading = useSelector(selectIsLoading);
  return isLoading ? (
    <Loader />
  ) : favorites.length === 0 ? (
    <EmptyFavoritesContainer>
      <EmptyFavoritesImage
        srcSet={`${usual} 1x, ${retina} 2x`}
        alt="Cocktail"
      />
      <EmptyDescription theme={theme}>
        You haven&rsquo;t added any favorite cocktails yet
      </EmptyDescription>
    </EmptyFavoritesContainer>
  ) : (
    <PaginatedItems
      pageCount={pageCount}
      items={favorites}
      destination={destination}
      ListComponent={CocktailList}
      theme={theme}
    />
  );
};

FavoriteCocktails.propTypes = {
  destination: PropTypes.string.isRequired,
  pageCount: PropTypes.number.isRequired,
  setSelectedPage: PropTypes.func,
  favorites: PropTypes.array.isRequired,
  theme: PropTypes.string.isRequired,
  selectedPage: PropTypes.number,
};

export default FavoriteCocktails;
