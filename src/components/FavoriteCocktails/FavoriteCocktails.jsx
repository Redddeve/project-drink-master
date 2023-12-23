import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import { selectFavoriteDrinks } from '../../redux/drinks/selectors';

import CocktailList from '../CocktailList/CocktailList';
import usual from '../../images/blue-iced-tea@1x.png';
import retina from '../../images/blue-iced-tea@2x.png';
import {
  EmptyDescription,
  EmptyFavoritesContainer,
  EmptyFavoritesImage,
} from './FavoriteCocktails.styled';
import PaginatedItems from '../Paginator/Paginator';
import { selectTheme } from '../../redux/theme/selectors';

const FavoriteCocktails = ({ destination, page, setPage }) => {
  const theme = useSelector(selectTheme);
  const favorites = useSelector(selectFavoriteDrinks);

  return favorites.length === 0 ? (
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
      page={page}
      items={favorites}
      destination={destination}
      ListComponent={CocktailList}
      setPage={setPage}
    />
  );
};

FavoriteCocktails.propTypes = {
  destination: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func,
};

export default FavoriteCocktails;
