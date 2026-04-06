import React from 'react';
import styles from './FilterButtons.module.css';

const FilterButtons = ({ currentFilter, onFilterChange }) => {
  const filters = [
    { key: 'all', label: '全部' },
    { key: 'pending', label: '待完成' },
    { key: 'completed', label: '已完成' },
    { key: 'abandoned', label: '已放弃' },
  ];

  return (
    <div className={styles.filterButtons}>
      {filters.map(filter => (
        <button
          key={filter.key}
          className={`${styles.filterBtn} ${currentFilter === filter.key ? styles.active : ''}`}
          onClick={() => onFilterChange(filter.key)}
          data-filter={filter.key}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;