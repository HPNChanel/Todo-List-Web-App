// src/components/Workspace.js
import React from 'react';
import { NavLink } from 'react-router-dom';
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
                    <NavLink to="/workspace/my-tasks" activeClassName="active" className="block py-2 px-4 mb-2 hover:bg-gray-700 rounded">
                        My Tasks
                    </NavLink>
                    <NavLink to="/workspace/important" activeClassName="active" className="block py-2 px-4 mb-2 hover:bg-gray-700 rounded">
                        Important
                    </NavLink>
                    <NavLink to="/workspace/completed" activeClassName="active" className="block py-2 px-4 mb-2 hover:bg-gray-700 rounded">
                        Completed
                    </NavLink>
                </nav>
            </aside>

            {/* Khu vực chính hiển thị task */}
            <main className="workspace-main bg-gray-100 flex-grow p-4">
                <div className="workspace-content">
                    <MyTasks />
                    {/* ImportantTasks và CompletedTasks sẽ được định nghĩa ở các routes tương ứng */}
                </div>
            </main>
        </div>
    );
}

export default Workspace;
