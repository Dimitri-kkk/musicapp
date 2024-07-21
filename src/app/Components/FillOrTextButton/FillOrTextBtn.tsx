import { useState } from "react";
import styles from './FillOrTextBtn.module.css';

interface ButtonProps {
  initialText: string;
  mode: 'filled' | 'textOnly';
}

const FillOrTextBtn: React.FC<ButtonProps> = ({ initialText, mode }) => {
  return (
    <button
      className={`${styles.btn} ${mode === 'filled' ? styles.filled : styles.textOnly}`}
    >
      {initialText}
    </button>
  );
};

export default FillOrTextBtn;

