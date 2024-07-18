import { useState } from "react";
import styles from './playlist-btn.module.css';

interface PlaylistButtonProps {
  initialText: string;
  mode: 'filled' | 'textOnly';
}

const PlaylistButton: React.FC<PlaylistButtonProps> = ({ initialText, mode }) => {
  const [text, setText] = useState(initialText);

  return (
    <button
      className={`${styles.btn} ${mode === 'filled' ? styles.filled : styles.textOnly}`}
    >
      {text}
    </button>
  );
};

export default PlaylistButton;

