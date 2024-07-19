import { useState } from "react";
import styles from './playlistBtn.module.css';

interface ButtonProps {
  initialText: string;
  mode: 'filled' | 'textOnly';
}

const PlaylistButton: React.FC<ButtonProps> = ({ initialText, mode }) => {
  return (
    <button
      className={`${styles.btn} ${mode === 'filled' ? styles.filled : styles.textOnly}`}
    >
      {initialText}
    </button>
  );
};

export default PlaylistButton;

