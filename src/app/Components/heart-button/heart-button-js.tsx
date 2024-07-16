import { useState } from 'react';
import styles from './HeartButton.module.scss';

export const HeartButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked); 
  };

  return (
    <button 
      id="heartButton" 
      className={`${styles.heartIcon} ${liked ? styles.liked : ''}`}
      onClick={toggleLike}
    ></button>
  );
};