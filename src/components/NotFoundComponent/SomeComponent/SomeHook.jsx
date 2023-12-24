import { useEffect, useRef, useState } from 'react';

const useSomeHock = (audioFile, loop = false) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = () => {
    const Game_Over = sessionStorage.getItem('Game_Over');

    if (!isPlaying && !Game_Over) {
      const audio = new Audio(audioFile);
      audio.loop = loop;
      audio.play().then(() => {
        setIsPlaying(true);
        sessionStorage.setItem('Game_Over', 'true');
      });
      audioRef.current = audio;
    } else {
      stopSound();
    }
  };

  const stopSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      stopSound();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      stopSound();
    };
  }, []);

  return { playSound, stopSound, isPlaying };
};

export default useSomeHock;
