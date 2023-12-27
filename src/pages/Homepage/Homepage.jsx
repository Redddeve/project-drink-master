import { useSelector } from 'react-redux';
import Hero from '../../components/Hero/Hero';
import PreviewDrinks from '../../components/PreviewDrinks/PreviewDrinks';
import CircleBg from '../../components/SharedComponents/circleBg/CircleBg';
import { CircleTwo } from './Homepage.styled';
import { useEffect, useState } from 'react';
import Modal from '../../components/Modal/Modal';
import { selectVisitCount } from '../../redux/auth/selectors';
import background from '../../images/motivation/Motivation-mob@2x.jpg';

const HomePage = () => {
  const visitCount = useSelector(selectVisitCount);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const currentDate = new Date().toDateString();
    const lastModalDate = sessionStorage.getItem('lastModalShown');

    if (
      (visitCount === 10 || visitCount === 50 || visitCount === 100) &&
      lastModalDate !== currentDate
    ) {
      setTimeout(() => {
        setIsModalOpen(true);
        sessionStorage.setItem('lastModalShown', currentDate);
      }, 2000);
    }
  }, [visitCount]);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <CircleTwo></CircleTwo>
      <CircleBg />
      <Hero />
      <PreviewDrinks />
      {isModalOpen && (
        <Modal
          background={background}
          isOpen={true}
          onClose={closeModal}
          message={`Wow! You have been using the application for ${visitCount} days!`}
        />
      )}
    </>
  );
};

export default HomePage;
