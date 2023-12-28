import {
  ComponentStyle,
  SpeakerLeft,
  SpeakerRight,
} from './SomeComponent.styled';
import partyPhone from '../../../images/sprite.svg';

const SomeComponent = () => {
  return (
    <ComponentStyle>
      <SpeakerLeft>
        <use href={`${partyPhone}#speaker`} />
      </SpeakerLeft>
      <SpeakerRight>
        <use href={`${partyPhone}#speaker`} />
      </SpeakerRight>
    </ComponentStyle>
  );
};

export default SomeComponent;
