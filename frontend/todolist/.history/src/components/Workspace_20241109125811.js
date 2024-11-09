// src/components/Workspace.js
import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import MyTasks from '../workspaces/MyTasks';
import ImportantTasks from '../workspaces/ImportantTasks';
import CompletedTasks from '../workspaces/CompletedTasks';

function Workspace() {
    return (
        <div className="workspace-container flex">
            {/* Thanh điều hướng bên trái */}
            <aside className="workspace-sidebar bg-gray-800 text-white w-1/5 min-h-screen p-4">
                <h2 className="text-xl font-semibold mb-6">Workspace</h2>
                <nav className="workspace-nav">
                    <NavLink to="/workspace/my-tasks" className="block py-2 px-4 mb-2 hover:bg-gray-700 rounded">
                        My Tasks
                    </NavLink>
                    <NavLink to="/workspace/important" className="block py-2 px-4 mb-2 hover:bg-gray-700 rounded">
                        Important
                    </NavLink>
                    <NavLink to="/workspace/completed" className="block py-2 px-4 mb-2 hover:bg-gray-700 rounded">
                        Completed
                    </NavLink>
                </nav>
            </aside>

            {/* Khu vực chính hiển thị task */}
            <main className="workspace-main bg-gray-100 flex-grow p-4">
                <Routes>
                    <Route path="my-tasks" element={<MyTasks />} />
                    <Route path="important" element={<ImportantTasks />} />
                    <Route path="completed" element={<CompletedTasks />} />
                </Routes>
            </main>
        </div>
    );
}

export default Workspace;
    