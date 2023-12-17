import sprite from "../../images/sprite.svg";
import usual from "../../images/blue-iced-tea@1x.png";
import retina from "../../images/blue-iced-tea@2x.png";
import { NotFoundContainer, Zero } from "./NotFoundComponent.styled";

const NotFoundComponent = () => {
  return (
    <NotFoundContainer>
      <Zero srcSet={`${usual} 1x, ${retina} 2x`} alt="Not Found" />
      <svg>
        <use href={sprite + "#icon-404"} />
      </svg>
    </NotFoundContainer>
  );
};

export default NotFoundComponent;
