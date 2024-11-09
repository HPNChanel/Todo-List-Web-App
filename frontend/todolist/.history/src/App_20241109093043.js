import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './contexts/TaskContext';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <TaskProvider>
            <Router>
                <div className="container my-4">
                    <Routes>
                        <Route path="/" element={<TaskList />} />
                    </Routes>
                </div>
            </Router>
        </TaskProvider>
    );
}

export default App;
