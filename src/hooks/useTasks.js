import { useCallback } from 'react';
import useLocalStorage from './useLocalStorage';

const useTasks = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const addTask = useCallback((text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      abandoned: false,
      date: new Date().toLocaleDateString('zh-CN'),
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  }, [setTasks]);

  const toggleTask = useCallback((id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed, abandoned: false } : task
      )
    );
  }, [setTasks]);

  const toggleAbandoned = useCallback((id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, abandoned: !task.abandoned, completed: false } : task
      )
    );
  }, [setTasks]);

  const deleteTask = useCallback((id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }, [setTasks]);

  return {
    tasks,
    addTask,
    toggleTask,
    toggleAbandoned,
    deleteTask,
  };
};

export default useTasks;