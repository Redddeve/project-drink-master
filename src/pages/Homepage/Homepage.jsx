import { useSelector } from 'react-redux';
import Hero from '../../components/Hero/Hero';
import PreviewDrinks from '../../components/PreviewDrinks/PreviewDrinks';
import { selectIsLoading } from '../../redux/drinks/selectors';
import { Loader } from '../../components/Loader/Loader';

const HomePage = () => {
  const loading = useSelector(selectIsLoading);

  return (
    <>
      {loading && <Loader />}

      <Hero />
      <PreviewDrinks />
    </>
  );
};

export default HomePage;
