'use client';

import Image from 'next/image';
import styles from './ThemeToggle.module.css';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      onClick={toggleTheme}
      style={
        theme === 'dark' ? { background: 'white' } : { background: '#0f172a' }
      }
    >
      <Image src='/moon.png' alt='' width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === 'dark'
            ? { left: 1, background: '#0f172a' }
            : { right: 1, background: 'white' }
        }
      ></div>
      <Image src='/sun.png' alt='' width={14} height={14} />
    </div>
  );
}

export default ThemeToggle;
