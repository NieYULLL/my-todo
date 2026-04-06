import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>待办事项应用 &copy; 2026 | 数据保存在本地浏览器中</p>
    </footer>
  );
};

export default Footer;