import { selectTheme } from '../../redux/theme/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../../redux/theme/slice';

const ToggleTheme = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(toggle());
  };
  return (
    <div>
      <button onClick={toggleTheme}>ToggleTheme</button>
    </div>
  );
};

export default ToggleTheme;
