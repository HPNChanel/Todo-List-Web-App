// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Workspace from './components/Workspace';
import { TaskProvider } from './contexts/TaskContext';

function App() {
    return (
        <TaskProvider>
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/workspace/my-tasks" component={Workspace} />
                    <Route path="/workspace/important" component={Workspace} />
                    <Route path="/workspace/completed" component={Workspace} />
                    {/* Thêm các route khác nếu cần */}
                </Switch>
            </Router>
        </TaskProvider>
    );
}

export default App;
