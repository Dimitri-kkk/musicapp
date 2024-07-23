import Image from "next/image";
import { useState } from "react";
import style from './heart-button.module.scss';

const HeartButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div onClick={toggleLike} className={style.heart}>
      <Image
        src={liked ? '/liked.svg' : '/not-liked.svg'}
        alt="Heart Icon"
        width={24}
        height={24}
      />
    </div>
  );
};

export default HeartButton;
