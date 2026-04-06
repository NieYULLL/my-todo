import React from 'react';
import styles from './Stats.module.css';

const Stats = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const abandoned = tasks.filter(task => task.abandoned || false).length;
  const pending = total - completed - abandoned;

  return (
    <div className={styles.stats}>
      <div className={styles.statItem}>
        <span className={styles.statNumber}>{total}</span>
        <span>全部任务</span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statNumber}>{completed}</span>
        <span>已完成</span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statNumber}>{pending}</span>
        <span>待完成</span>
      </div>
    </div>
  );
};

export default Stats;