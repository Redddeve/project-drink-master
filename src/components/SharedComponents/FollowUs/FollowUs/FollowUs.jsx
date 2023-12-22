import sprite from '../../../../images/sprite.svg';
import { selectTheme } from '../../../../redux/theme/selectors.js';
import { useSelector } from 'react-redux';
import {
  FollowUsWrap,
  StyledFollowUsLink,
  StyledFollowUsItem,
  SvgSocial,
} from './FollowUs.styled.js';

const FollowUs = () => {
  const theme = useSelector(selectTheme);
  return (
    <FollowUsWrap>
      <StyledFollowUsItem theme={theme}>
        <StyledFollowUsLink
          theme={theme}
          href="https://www.facebook.com/goITclub/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgSocial theme={theme}>
            <use href={sprite + '#icon-facebook'} />
          </SvgSocial>
        </StyledFollowUsLink>
      </StyledFollowUsItem>

      <StyledFollowUsItem theme={theme}>
        <StyledFollowUsLink
          theme={theme}
          href="https://www.instagram.com/goitclub/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgSocial theme={theme}>
            <use href={sprite + '#icon-instagram'} />
          </SvgSocial>
        </StyledFollowUsLink>
      </StyledFollowUsItem>

      <StyledFollowUsItem theme={theme}>
        <StyledFollowUsLink
          theme={theme}
          href="https://www.youtube.com/c/GoIT"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgSocial theme={theme}>
            <use href={sprite + '#icon-youtube'} />
          </SvgSocial>
        </StyledFollowUsLink>
      </StyledFollowUsItem>
    </FollowUsWrap>
  );
};

export default FollowUs;
