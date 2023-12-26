import PropTypes from 'prop-types';
import CocktailItem from '../CocktailItem/CocktailItem';
import { ListStyled } from './CocktailList.styled';

const CocktailList = ({ cocktailData, destination, theme }) => {
  return (
    <>
      <ListStyled>
        {cocktailData?.map((cocktail, index) => (
          <CocktailItem
            theme={theme}
            key={cocktail._id || index}
            cocktail={cocktail}
            page={destination}
          />
        ))}
      </ListStyled>
    </>
  );
};

CocktailList.propTypes = {
  cocktailData: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      drink: PropTypes.string.isRequired,
      alcoholic: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      drinkThumb: PropTypes.string.isRequired,
    })
  ).isRequired,
  destination: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

export default CocktailList;
