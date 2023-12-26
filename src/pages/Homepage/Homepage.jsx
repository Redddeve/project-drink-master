import Hero from '../../components/Hero/Hero';
import PreviewDrinks from '../../components/PreviewDrinks/PreviewDrinks';
import CircleBg from '../../components/SharedComponents/circleBg/CircleBg';
import { CircleTwo } from './Homepage.styled';

const HomePage = () => {
  return (
    <>
      <CircleTwo></CircleTwo>
      <CircleBg />
      <Hero />
      <PreviewDrinks />
    </>
  );
};

export default HomePage;
