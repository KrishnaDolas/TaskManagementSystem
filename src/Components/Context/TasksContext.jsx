import React, { createContext, useContext, useState } from 'react';

// Create a context to store tasks data
const TasksContext = createContext();

// Custom hook to access the tasks context
export const useTasks = () => useContext(TasksContext);

// Provider component to wrap around the App component
export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Function to update a task's completed status and stars clicked
  const updateTask = (index, completed, starsClicked) => {
    const newTasks = [...tasks];
    newTasks[index] = {
      ...newTasks[index],
      completed,
      completedAt: new Date().toLocaleString(),
      starsClicked
    };
    setTasks(newTasks);
  };

  return (
    <TasksContext.Provider value={{ tasks, setTasks, updateTask }}>
      {children}
    </TasksContext.Provider>
  );
};
