import React, { useState } from 'react';
import useTasks from './hooks/useTasks';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import Stats from './components/Stats';
import FilterButtons from './components/FilterButtons';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import './App.css';

function App() {
  const { tasks, addTask, toggleTask, toggleAbandoned, deleteTask } = useTasks();
  const [filter, setFilter] = useState('all');

  return (
    <div className="container">
      <Header />
      <TaskInput onAddTask={addTask} />
      <Stats tasks={tasks} />
      <FilterButtons currentFilter={filter} onFilterChange={setFilter} />
      <TaskList
        tasks={tasks}
        filter={filter}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onAbandon={toggleAbandoned}
      />
      <Footer />
    </div>
  );
}

export default App;