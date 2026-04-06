import React, { useState } from 'react';
import styles from './TaskInput.module.css';

const TaskInput = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      alert('请输入任务内容！');
      return;
    }
    onAddTask(inputValue.trim());
    setInputValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <form className={styles.inputSection} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.taskInput}
        placeholder="输入新的任务..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        autoComplete="off"
      />
      <button type="submit" className={styles.addBtn}>
        <span>添加任务</span>
      </button>
    </form>
  );
};

export default TaskInput;