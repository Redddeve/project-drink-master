import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/selectors';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/welcome" state={{ from: location }} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
