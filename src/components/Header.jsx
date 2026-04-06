import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>📝 我的待办事项</h1>
      <p className={styles.subtitle}>管理您的每日任务，提高工作效率</p>
    </header>
  );
};

export default Header;