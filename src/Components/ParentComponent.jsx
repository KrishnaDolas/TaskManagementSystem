import React, { useState } from 'react';
import Tasks from './Tasks';
import DoneTask from './DoneTask'; // Import the DoneTask component
import { TasksProvider } from './Context/TasksContext'; // Importing TasksProvider correctly

function ParentComponent() {
  const [completedTasks, setCompletedTasks] = useState([]);

  return (
    <div>
      <Tasks />
      <DoneTask completedTasks={completedTasks} /> {/* Pass completedTasks as a prop */}
    </div>
  );
}

export default ParentComponent;
