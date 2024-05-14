import React from "react";
import MiniDrawer from "./MiniDrawer";
import { useTasks } from "./Context/TasksContext";

function DoneTask() {
  const { tasks } = useTasks();

  // Filter completed tasks
  const completedTasks = tasks.filter(task => task.completed);

  console.log("Completed tasks:", completedTasks); // Add this line

  return (
    <MiniDrawer>
      <div>
        <h2 className="mt-4 mb-3">Completed Tasks</h2>
        {completedTasks.length > 0 ? (
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Task Name</th>
                <th scope="col">Completed At</th>
                <th scope="col">Rating</th>
              </tr>
            </thead>
            <tbody>
              {completedTasks.map((task, index) => (
                <tr key={index}>
                  <td>{task.name}</td>
                  <td>{task.completedAt}</td>
                  <td>{task.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No completed tasks</p>
        )}
      </div>
    </MiniDrawer>
  );
}

export default DoneTask;
