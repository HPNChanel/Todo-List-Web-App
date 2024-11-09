// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-container text-center py-10">
            <h1 className="text-4xl font-bold mb-6">Welcome to the Todo List App</h1>
            <p className="text-lg mb-6">Organize and prioritize your tasks with ease!</p>
            <div className="flex justify-center gap-6">
                <Link to="/workspace/my-tasks" className="home-link bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
                    Go to My Tasks
                </Link>
                <Link to="/workspace/important" className="home-link bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded">
                    Go to Important Tasks
                </Link>
                <Link to="/workspace/completed" className="home-link bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded">
                    Go to Completed Tasks
                </Link>
            </div>
        </div>
    );
}

export default Home;
