import { FollowUsWrap, SvgSocial } from './FollowUs.styled';
import sprite from '../../../../images/sprite.svg';

const FollowUs = () => {
  return (
    <FollowUsWrap>
      <li>
        <a
          href="https://www.facebook.com/goITclub/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgSocial>
            <use href={sprite + '#icon-facebook'} />
          </SvgSocial>
        </a>
      </li>

      <li>
        <a
          href="https://www.instagram.com/goitclub/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgSocial>
            <use href={sprite + '#icon-instagram'} />
          </SvgSocial>
        </a>
      </li>

      <li>
        <a
          href="https://www.youtube.com/c/GoIT"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgSocial>
            <use href={sprite + '#icon-youtube'} />
          </SvgSocial>
        </a>
      </li>
    </FollowUsWrap>
  );
};

export default FollowUs;
