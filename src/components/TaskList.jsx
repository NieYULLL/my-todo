import React from 'react';
import TaskItem from './TaskItem';
import styles from './TaskList.module.css';

const TaskList = ({ tasks, filter, onToggle, onDelete, onAbandon }) => {
  // 根据筛选条件过滤任务
  const filteredTasks = tasks.filter(task => {
    const completed = task.completed || false;
    const abandoned = task.abandoned || false;

    if (filter === 'pending') return !completed && !abandoned;
    if (filter === 'completed') return completed;
    if (filter === 'abandoned') return abandoned;
    return true; // 'all'
  });

  if (filteredTasks.length === 0) {
    return (
      <div className={styles.emptyState}>
        <h3>暂无任务</h3>
        <p>添加您的第一个任务吧！</p>
      </div>
    );
  }

  return (
    <ul className={styles.taskList}>
      {filteredTasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onAbandon={onAbandon}
        />
      ))}
    </ul>
  );
};

export default TaskList;