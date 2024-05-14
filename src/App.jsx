import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import AssignTask from './Components/AssignTask';
import Tasks from './Components/Tasks';
import { TasksProvider } from './Components/Context/TasksContext'; // Importing TasksProvider correctly
import DoneTask from './Components/DoneTask';

function App() {
    return (
        <Router>
            <TasksProvider> {/* TasksProvider wraps all routes that need access to the tasks context */}
                <Routes>
                    <Route path="/DishaAcademy" element={<Login />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/AssignTask" element={<AssignTask />} />
                    <Route path="/Tasks" element={<Tasks />} />
                    <Route path="/DoneTask" element={<DoneTask/>} />

                </Routes>
            </TasksProvider>
        </Router>
    );
}

export default App;
