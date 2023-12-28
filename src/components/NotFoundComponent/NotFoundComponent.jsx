import sprite from '../../images/sprite.svg';
import usual from '../../images/blue-iced-tea@1x.png';
import retina from '../../images/blue-iced-tea@2x.png';
import { NotFoundContainer, Zero } from './NotFoundComponent.styled';
import useSomeHock from './SomeComponent/SomeHook';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/theme/selectors';

import clubOk from './SomeComponent/sounds/clubOk.mp3';
import SomeComponent from './SomeComponent/SomeComponent';

const NotFoundComponent = () => {
  const { playSound, isPlaying } = useSomeHock(clubOk, true);
  const theme = useSelector(selectTheme);

  return (
    <NotFoundContainer theme={theme}>
      <Zero
        $isPlaying={isPlaying}
        srcSet={`${usual} 1x, ${retina} 2x`}
        alt="Not Found"
        onClick={playSound}
      />
      {isPlaying && <SomeComponent />}
      <svg>
        <use href={sprite + '#icon-404'} />
      </svg>
    </NotFoundContainer>
  );
};

export default NotFoundComponent;
