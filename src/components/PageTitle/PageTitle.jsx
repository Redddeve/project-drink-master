import { useSelector } from 'react-redux';
import { StyledPageTitle } from './PageTitle.styled';
// import PropTypes from 'prop-types';
// eslint-disable-next-line react/prop-types
const PageTitle = ({ title, mbMobile, mbTablet, mbDesktop }) => {
  const theme = useSelector(state => state.theme.theme);
  return (
    <StyledPageTitle
      $mbMobile={mbMobile}
      $mbTablet={mbTablet}
      $mbDesktop={mbDesktop}
      theme={theme}
    >
      {title}
    </StyledPageTitle>
  );
};

export default PageTitle;

// PageTitle.propTypes = {
//   title: PropTypes.string.isRequired,
//   mbMobile: PropTypes.string,
//   mbTablet: PropTypes.string,
//   mbDesktop: PropTypes.string,
// };
