import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavoriteDrinkThunk,
  getDrinkbyIdThunk,
  getFavoriteDrinksThunk,
  removeFavoriteDrinkThunk,
} from '../../redux/drinks/operations.js';
import {
  selectDrinkById,
  selectFavoriteDrinks,
} from '../../redux/drinks/selectors.js';
import {
  StyledAddToFavButton,
  StyledDrinkDesc,
  StyledDrinkHeader,
  StyledDrinkHero,
  StyledDrinkImage,
  StyledDrinkType,
} from './UserDrinkPage.styled.js';
import DrinkIngredientsList from '../../components/DrinkIngredientsList/DrinkIngredientsList.jsx';
import RecipePreparation from '../../components/RecipePreparation/RecipePreparation.jsx';
import { selectTheme } from '../../redux/theme/selectors.js';
import CircleBg from '../../components/SharedComponents/circleBg/CircleBg.jsx';
import Modal from '../../components/Modal/Modal.jsx';
import { useMediaQuery } from 'react-responsive';
import firstFavMob from '../../images/motivation/Motivation-mob3@2x.jpg';
import firstFavTabDesc from '../../images/motivation/motivation3@2x.jpg';
import tenthFavMob from '../../images/motivation/Motivation-mob2@2x.jpg';
import tenthFavTabDesc from '../../images/motivation/motivation2@2x.jpg';

const UserDrinkPage = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  const [background, setBackground] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const theme = useSelector(selectTheme);
  const { drinkId } = useParams();
  const dispatch = useDispatch();

  const drink = useSelector(selectDrinkById);
  const favorites = useSelector(selectFavoriteDrinks);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToFav = () => {
    dispatch(addFavoriteDrinkThunk(drinkId))
      .then(data => {
        const { sendFirstFavGreeting, sendTenthFavGreeting } = data.payload;

        const firstFav = sendFirstFavGreeting === true;
        const tenthFav = sendTenthFavGreeting === true;

        if (firstFav) {
          openModal();
          setModalMessage(
            'Wow! You have added the first recipe to your favorites!'
          );
          setBackground(isMobile ? firstFavMob : firstFavTabDesc);
        }
        if (tenthFav) {
          openModal();
          setModalMessage('Wow! You have added 10 recipes to your favorites!');
          setBackground(isMobile ? tenthFavMob : tenthFavTabDesc);
        }
      })
      .catch(error => {
        console.error('Error in addFavoriteDrinkThunk:', error);
      });
  };
  const handleRemoveFromFav = () => {
    dispatch(removeFavoriteDrinkThunk(drinkId));
  };

  useEffect(() => {
    dispatch(getFavoriteDrinksThunk({ page: 1, itemsPerPage: 1000 }));
    dispatch(getDrinkbyIdThunk(drinkId));
    window.scrollTo({
      top: 0,
    });
  }, [dispatch, drinkId]);

  useEffect(() => {
    setIsFavorite(!!favorites?.find(dr => dr._id === drink._id));
  }, [drink, favorites]);

  return (
    <>
      <CircleBg />
      <StyledDrinkHero>
        <div>
          <StyledDrinkHeader theme={theme}>{drink.drink}</StyledDrinkHeader>
          <StyledDrinkType
            theme={theme}
          >{`${drink.glass} / ${drink.alcoholic}`}</StyledDrinkType>
          <StyledDrinkDesc theme={theme}>{drink.description}</StyledDrinkDesc>
          <StyledAddToFavButton
            theme={theme}
            onClick={isFavorite ? handleRemoveFromFav : handleAddToFav}
          >
            {isFavorite
              ? 'Remove from favorite drinks'
              : 'Add to favorite drinks'}
          </StyledAddToFavButton>
        </div>
        <StyledDrinkImage theme={theme} src={drink.drinkThumb} />
      </StyledDrinkHero>
      <DrinkIngredientsList
        theme={theme}
        ingredientsArray={drink ? drink.ingredients : []}
      />
      <RecipePreparation theme={theme} instructions={drink.instructions} />
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          closeModal();
          setModalMessage('');
          setBackground('');
        }}
        message={modalMessage}
        background={background}
      />
    </>
  );
};

export default UserDrinkPage;
