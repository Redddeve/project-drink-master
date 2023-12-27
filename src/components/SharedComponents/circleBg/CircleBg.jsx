import { Circle } from './CircleBg.styled';
import { selectTheme } from '../../../redux/theme/selectors';
import { useSelector } from 'react-redux';

const CircleBg = () => {
  const theme = useSelector(selectTheme);
  return <Circle theme={theme}></Circle>;
};

export default CircleBg;
