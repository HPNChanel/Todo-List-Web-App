// src/components/Workspace.js
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import MyTasks from './MyTasks';
import ImportantTasks from './ImportantTasks';
import CompletedTasks from './CompletedTasks';
import '../styles/Workspace.css';

function Workspace() {
    return (
        <div className="workspace-container">
            <div className="workspace-sidebar">
                <h2>Workspace</h2>
                <nav>
                    <Link to="/mytasks">My Tasks</Link>
                    <Link to="/important">Important</Link>
                    <Link to="/completed">Completed</Link>
                </nav>
            </div>
            <div className="workspace-main">
                <Routes>
                    <Route path="/mytasks" element={<MyTasks />} />
                    <Route path="/important" element={<ImportantTasks />} />
                    <Route path="/completed" element={<CompletedTasks />} />
                </Routes>
            </div>
        </div>
    );
}

export default Workspace;
