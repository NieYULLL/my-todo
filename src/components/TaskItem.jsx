import React from 'react';
import styles from './TaskItem.module.css';

const TaskItem = ({ task, onToggle, onDelete, onAbandon }) => {
  const handleToggle = () => {
    onToggle(task.id);
  };

  const handleDelete = () => {
    if (window.confirm('确定要删除这个任务吗？')) {
      onDelete(task.id);
    }
  };

  const handleAbandon = () => {
    if (window.confirm('确定要放弃这个任务吗？')) {
      onAbandon(task.id);
    }
  };

  const completed = task.completed || false;
  const abandoned = task.abandoned || false;

  return (
    <li className={`${styles.taskItem} ${completed ? styles.completed : ''} ${abandoned ? styles.abandoned : ''}`}>
      <input
        type="checkbox"
        className={styles.taskCheckbox}
        checked={completed}
        onChange={handleToggle}
        disabled={abandoned}
      />
      <div className={styles.taskContent}>
        <div className={styles.taskText}>{task.text}</div>
        <div className={styles.taskDate}>添加时间: {task.date}</div>
      </div>
      <div className={styles.taskActions}>
        <button
          className={styles.abandonBtn}
          onClick={handleAbandon}
          title={abandoned ? "已放弃" : "放弃任务"}
          disabled={completed}
        >
          {abandoned ? "✗" : "○"}
        </button>
        <button className={styles.deleteBtn} onClick={handleDelete} title="删除任务">
          ×
        </button>
      </div>
    </li>
  );
};

export default TaskItem;