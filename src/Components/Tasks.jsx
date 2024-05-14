import React from "react";
import { Alert, AlertTitle, Button } from "@mui/material";
import Fevicon from "./Fevicon";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MiniDrawer from "./MiniDrawer";
import StarRating from "./StarRating"; // Import StarRating component
import { useTasks } from "./Context/TasksContext";
import DoneIcon from '@mui/icons-material/Done'; // Import Done icon

function Tasks() {

  const newTask = {
    name: "Sample Task",
    date: "2024-05-14",
    // Other properties
    rating: [], // Initialize rating as an empty array
  };

  const { tasks, setTasks } = useTasks();

  const toggleMessageBox = (index) => {
    const newTasks = [...tasks];
    newTasks[index].showMessageBox = !newTasks[index].showMessageBox;
    setTasks(newTasks);
  };

  const handleMarkAsDone = (index) => {
    const newTasks = [...tasks];
    const completedTask = newTasks[index];
    completedTask.completed = true; // Mark task as completed
    completedTask.completedAt = new Date().toLocaleString(); // Set completedAt timestamp
    // Count stars clicked based on the rating
    completedTask.starsClicked = completedTask.rating; // Assuming rating is the number of stars clicked
    setTasks(newTasks);
  };
  
  
  
  const handleRate = (index, value) => {
    const newTasks = [...tasks];
    newTasks[index].rating = value;
    // No need to console log here unless for debugging purposes
    setTasks(newTasks);
  };
  
  

  return (
    <MiniDrawer>
      <div>
        <div>
          <Alert>
            <AlertTitle>Tasks</AlertTitle>
            Click on square box to{" "}
            <strong>open (describe) and to mark done</strong>
          </Alert>
        </div>
        <div className="container-fluid" style={{ width: "100%" }}>
          {tasks.map((task, index) => (
            <div key={index}>
              <ul
                className="list-group list-group-horizontal"
                style={{
                  listStyle: "none",
                  padding: 0,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <li style={{ flexBasis: "5%" }} className="list-group-item">
                  <input type="checkbox" onChange={() => toggleMessageBox(index)} />
                </li>
                <li style={{ flexBasis: "10%" }} className="list-group-item">
                  <Fevicon />
                </li>
                <li
                  style={{ flexBasis: "30%", textAlign: "center" }}
                  className="list-group-item"
                >
                  {task.name}
                </li>
                <li
                  style={{ flexBasis: "20%", textAlign: "center" }}
                  className="list-group-item"
                >
                  {task.date}
                </li>
                <li
                  style={{ flexBasis: "20%", textAlign: "right" }}
                  className="list-group-item"
                >
                  <AccountCircleIcon />
                </li>
                <li
                  style={{ flexBasis: "20%", textAlign: "right" }}
                  className="list-group-item"
                >
                  {task.completed ? (
                    <DoneIcon style={{ color: 'blue' }} /> // Display blue tick mark icon if completed
                  ) : null}
                </li>
              </ul>
              <div
                onClick={() => toggleMessageBox(index)}
                style={{ cursor: "pointer", marginBottom: "10px" }}
              >
                {task.showMessageBox && (
                  <div>
                    <div style={{ backgroundColor: "white", padding: "10px", borderRadius: "5px", marginBottom: "10px" }}>
                      <p>Description: {task.description}</p>
                      <p>Assigned To: {task.assignedTo}</p>
                      <p>Status: {task.status}</p>
                      <p>Priority: {task.priority}</p>
                    </div>
                  </div>
                )}
              </div>
              {task.showMessageBox && (
                <div className="alert alert-success" role="alert">
                  <strong>{task.name}</strong> - {task.date} - Description:{" "}
                  {task.description} - Assigned To: {task.assignedTo} - Status:{" "}
                  {task.status} - Priority: {task.priority}
                  {!task.completed && ( // Display "Mark as Done" button if not completed
                    <Button
                      onClick={() => handleMarkAsDone(index)}
                      variant="contained"
                      color="primary"
                    >
                      Mark as Done
                    </Button>
                  )}
                  <StarRating
                    value={task.rating}
                    onRate={(value) => handleRate(index, value)}
                    maxStars={10} // Set max stars to 10
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </MiniDrawer>
  );
}

export default Tasks;
