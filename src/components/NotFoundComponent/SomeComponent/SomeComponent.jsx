import {
  ComponentStyle,
  SpeakerLeft,
  SpeakerRight,
} from './SomeComponent.styled';
import partyPhone from './partyPhone.svg';

const SomeComponent = () => {
  return (
    <ComponentStyle>
      <h2>Greetings Mother&rsquo;s НаЦсkеr😁</h2>
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
