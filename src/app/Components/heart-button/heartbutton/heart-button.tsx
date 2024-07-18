import Image from "next/image";
import { useState } from "react";

const HeartToggle = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div onClick={toggleLike} style={{ cursor: 'pointer' }}>
      <Image
        src={liked ? '/liked.svg' : '/not-liked.svg'}
        alt="Heart Icon"
        width={24}
        height={24}
      />
    </div>
  );
};

export default HeartToggle;
